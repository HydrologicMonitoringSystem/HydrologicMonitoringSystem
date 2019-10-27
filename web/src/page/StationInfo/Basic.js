import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import { connect } from 'dva';
import { Select } from 'antd';

const namespace = 'stationInfoBasic';

const mapStateToProps = (state) => {
    const data = state[namespace].data;
    const stationList = state[namespace].stationList;
    return {
        data,
        stationList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryStationList`,
            });
        },
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class Basic extends React.Component {
    componentDidMount() {
        this.props.onDidMount();
        console.log(this.props.data);
        // echart初始化
        var stationBasicChat = echarts.init(document.getElementById('stationBasicChat'));
        // 绘制图表
        stationBasicChat.setOption({
            title: { text: '流速流量信息' },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['平均流速平滑', '水位', '流量', '流量平滑', '指标流速', '指标流速平滑', '平均流速']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: {
                        show: true,
                        type: 'jpg'
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.props.data.map(i => {
                        return i.category;
                    })
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '平均流速平滑',
                    type: 'line',
                    data: this.props.data.map(i => {
                        return i.value[0];
                    }),
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '水位',
                    type: 'line',
                    data: this.props.data.map(i => {
                        return i.value[1];
                    }),
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
            ]
        });
    }
    render() {
        return (
            <div>
                <div>站点：<Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a station"
                optionFilterProp="stationSelectors"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.stationList.station.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }>{this.props.stationList.map(station => {
                    return (
                        <Option value={station.stationCode}>{station.station}</Option>
                    )
                })}</Select></div>
                <div id="stationBasicChat" style={{ width: '80%', height: 500 }}></div>
            </div>
        );
    }
}

export default Basic;
