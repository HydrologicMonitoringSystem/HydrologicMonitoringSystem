import request from '../util/request';

export default {
    namespace: 'stationInfoBasic',
    state: {
        stationList: []
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