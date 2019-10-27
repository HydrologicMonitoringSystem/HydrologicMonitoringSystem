import request from '../util/request';

export default {
    namespace: 'stationInfoBasic',
    state: {
        stationList: [],
        data: [
            { category: '1月', value: [2.0, 2.6] },
            { category: '2月', value: [4.9, 5.9] },
            { category: '3月', value: [7.0, 9.0] },
            { category: '4月', value: [23.2, 26.4] },
            { category: '5月', value: [25.6, 28.7] },
            { category: '6月', value: [76.7, 70.7] },
            { category: '7月', value: [135.6, 175.6] },
            { category: '8月', value: [162.2, 182.2] },
            { category: '9月', value: [32.6, 48.7] },
            { category: '10月', value: [20.0, 18.8] },
            { category: '11月', value: [6.4, 6.0] },
            { category: '12月', value: [3.3, 2.3] },
        ],
        cols: {
            month: {
                range: [0, 1],
            },
        },
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
                stationList
            };
        }
    },
};