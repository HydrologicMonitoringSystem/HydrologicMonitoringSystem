import request from '../util/request';

export default {
    namespace: 'stationConf',
    state: {
        stationConf: [{
            code: 'front',
            name: '前',
            placeholder: '前值'
        }, {
            code: 'back',
            name: '后',
            placeholder: '后值'
        }],
    },
    effects: {
    },
    reducers: {
    },
};