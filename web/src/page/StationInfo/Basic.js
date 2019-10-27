import React, { Component } from 'react';
import { connect } from 'dva';
import { Select } from 'antd';

const namespace = 'stationInfoBasic'

function onChange(value) {
    console.log(`selected ${value}`);
}

const mapStateToProps = (state) => {
    const stationList = state[namespace].stationList;
    return {
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
export default class StationInfoBasic extends Component {
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>站点 <Select
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
                {this.props.stationList.map(station => (
                    <Option value={ station.stationCode }>{ station.station }</Option>
                ))}
            </Select></div>
        );
    }
}