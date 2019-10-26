import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

const namespace = 'stationList';

const mapStateToProps = (state) => {
    const helpMsg = state[namespace].helpMsg;
    const columns = state[namespace].columns;
    const data = state[namespace].data;
    return {
        helpMsg,
        columns,
        data,
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
export default class StationList extends Component {
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <Table
                columns={this.props.columns}
                dataSource={this.props.data}
                bordered
                footer={() => this.props.helpMsg}
            />
        );
    }
}