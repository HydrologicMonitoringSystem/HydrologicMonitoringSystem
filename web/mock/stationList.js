export default {
    'get /server/stationList': function (req, res) {
        const data = [{
            'station': '杭州',
            'timestamp': '2019-10-26 18:00:03',
            'speed': '100',
            'speedSmooth': '100',
            'speedAvg': '10',
            'speedSmoothAvg': '',
            'stage': '10',
            'flow': 100,
            'flowSmooth': 1000
        }];
        setTimeout(() => {
            res.json(data);
        }, 3000);
    },
};