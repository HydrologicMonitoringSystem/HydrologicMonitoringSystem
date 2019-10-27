import request from '../util/request';

export default {
    namespace: 'stationInfoBasic',
    state: {
        stationList: [],
        data: [
            {
                key: 1,
                month: 'Jan',
                city: 'China',
                revenue: 7,
            },
            {
                key: 2,
                month: 'Jan',
                city: 'Oversea',
                revenue: 3.9,
            },
            {
                key: 3,
                month: 'Feb',
                city: 'China',
                revenue: 6.9,
            },
            {
                month: 'Feb',
                city: 'Oversea',
                revenue: 4.2,
            },
            {
                key: 4,
                month: 'Mar',
                city: 'China',
                revenue: 9.5,
            },
            {
                key: 5,
                month: 'Mar',
                city: 'Oversea',
                revenue: 5.7,
            },
            {
                key: 6,
                month: 'Apr',
                city: 'China',
                revenue: 14.5,
            },
            {
                key: 7,
                month: 'Apr',
                city: 'Oversea',
                revenue: 8.5,
            },
            {
                key: 8,
                month: 'May',
                city: 'China',
                revenue: 18.4,
            },
            {
                key: 9,
                month: 'May',
                city: 'Oversea',
                revenue: 11.9,
            },
            {
                key: 10,
                month: 'Jun',
                city: 'China',
                revenue: 21.5,
            },
            {
                key: 11,
                month: 'Jun',
                city: 'Oversea',
                revenue: 15.2,
            },
            {
                key: 12,
                month: 'Jul',
                city: 'China',
                revenue: 25.2,
            },
            {
                key: 13,
                month: 'Jul',
                city: 'Oversea',
                revenue: 17,
            },
            {
                key: 14,
                month: 'Aug',
                city: 'China',
                revenue: 26.5,
            },
            {
                key: 15,
                month: 'Aug',
                city: 'Oversea',
                revenue: 16.6,
            },
            {
                key: 16,
                month: 'Sep',
                city: 'China',
                revenue: 23.3,
            },
            {
                key: 17,
                month: 'Sep',
                city: 'Oversea',
                revenue: 14.2,
            },
            {
                key: 18,
                month: 'Oct',
                city: 'China',
                revenue: 18.3,
            },
            {
                key: 19,
                month: 'Oct',
                city: 'Oversea',
                revenue: 10.3,
            },
            {
                key: 20,
                month: 'Nov',
                city: 'China',
                revenue: 13.9,
            },
            {
                key: 21,
                month: 'Nov',
                city: 'Oversea',
                revenue: 6.6,
            },
            {
                key: 22,
                month: 'Dec',
                city: 'China',
                revenue: 9.6,
            },
            {
                key: 23,
                month: 'Dec',
                city: 'Oversea',
                revenue: 4.8,
            },
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