export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'StationList',
            },
            {
                path: '/list',
                component: 'StationList'
            },
            {
                path: '/info',
                // component: 'StationConf'
                routes: [
                    { path: '/info/basic', component: 'StationInfo/Basic' },
                    { path: '/info/section', component: 'StationInfo/Section' },
                    { path: '/info/export', component: 'StationInfo/Export' }
                  ]
            },
            {
                path: '/conf',
                component: 'StationConf'
            },
        ]
    }],
};