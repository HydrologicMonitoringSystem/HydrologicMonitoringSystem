import { Component } from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'stationConf';

const mapStateToProps = (state) => {
    const stationConf = state[namespace].stationConf;
    return {
        stationConf
    };
};

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

@connect(mapStateToProps)
class StationConf extends Component {
  // To generate mock Form.Item
  getStationConf() {
    const stationConf = this.props.stationConf;
    const children = [];
    stationConf.map(conf => {
      children.push(
        <Col span={5} key={conf.code}>
          <Form.Item label={conf.name}>
            {(<Input placeholder={conf.placeholder} />)}
          </Form.Item>
        </Col>,
      );
    })
    return children;
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    return (
      <Form {...formItemLayout} className="station-conf-form" onSubmit={this.handleSubmit}>
        <Row gutter={24}>
            <div>平滑公式：</div>
            {this.getStationConf()
        }</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              取消
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
};

export default connect(mapStateToProps)(Form.create()(StationConf));