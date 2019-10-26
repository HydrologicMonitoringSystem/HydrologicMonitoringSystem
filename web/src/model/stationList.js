import request from '../util/request';

export default {
    namespace: 'stationList',
    state: {
        helpMsg: "备注：1.点击站点跳转到站点详情-流速流量信息（站点显示对应站点）2.数据后面能否加上下箭头表示与前值对比的变化，带颜色更好红色上绿色下",
        columns: [
            {
                title: '站点',
                dataIndex: 'station',
                render: text => <a>{text}</a>,
            },
            {
                title: '采集时间点',
                className: 'timestamp',
                dataIndex: 'timestamp',
            },
            {
                title: '指标流速',
                dataIndex: 'speed',
            },
            {
                title: '指标流速平滑',
                dataIndex: 'speedSmooth',
            },
            {
                title: '平均流速',
                dataIndex: 'speedAvg',
            },
            {
                title: '平均流速平滑',
                dataIndex: 'speedSmoothAvg',
            },
            {
                title: '水位',
                dataIndex: 'stage',
            },
            {
                title: '流量',
                dataIndex: 'flow',
            },
            {
                title: '流量平滑',
                dataIndex: 'flowSmooth',
            },
        ],
        data: [],
    },
    effects: {
        *queryStationList(_, sagaEffects) {
            const { call, put } = sagaEffects;
            try {
                const endPointURI = '/server/stationList';

                const data = yield call(request, endPointURI);
                yield put({ type: 'initStationList', payload: data });
            } catch (e) {
                message.error('数据获取失败'); // 打印错误信息
            }
        }
    },
    reducers: {
        initStationList(state, { payload: stationList }) {
            return {
                helpMsg: state.helpMsg,
                columns: state.columns,
                data: stationList
            };
        }
    },
};