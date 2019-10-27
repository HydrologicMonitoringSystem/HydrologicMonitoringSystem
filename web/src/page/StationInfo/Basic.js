import React, { Component } from 'react';
import { connect } from 'dva';
import { Select } from 'antd';
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util,
} from 'bizcharts';

const { Line } = Guide;

const namespace = 'stationInfoBasic'

function onChange(value) {
    console.log(`selected ${value}`);
}

const mapStateToProps = (state) => {
    const stationList = state[namespace].stationList;
    const data = state[namespace].data;
    const cols = state[namespace].cols;
    return {
        stationList,
        data,
        cols
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
export default class StationInfoBasic extends Component {
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                <div>站点 <Select
                    key='stationInfoBasicSelect'
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a station"
                    optionFilterProp="station"
                    onChange={onChange}
                    // onFocus={onFocus}
                    // onBlur={onBlur}
                    // onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.props.staion.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {this.props.stationList.map((station, key) => (
                        <Select.Option key={key} value={station.stationCode}>{station.station}</Select.Option>
                    ))}
                </Select></div>
                <div>
                    <Chart key='stationInfoBasicChart' height={400} data={this.props.data} scale={this.props.cols} forceFit>
                        <Legend />
                        <Axis name="month" />
                        <Axis
                            name="revenue"
                            label={{
                                formatter: val => `${val}亿`,
                            }}
                        />
                        <Tooltip
                            crosshairs={{
                                type: 'y',
                            }}
                        />
                        <Geom type="line" position="month*revenue" size={2} color={'city'} />
                        <Geom
                            type="point"
                            position="month*revenue"
                            size={4}
                            shape={'circle'}
                            color={'city'}
                            style={{
                                stroke: '#fff',
                                lineWidth: 1,
                            }}
                        />
                    </Chart>
                </div>
            </div>
        )
    }
}