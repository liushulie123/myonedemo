import {
  DingdingOutlined,
  DownOutlined,
  EllipsisOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import TodoList from '../TodoList_M/src/TodoList';
import Tabtodolist from '../tabTodolist/tabTodolist';
import BaseView from '../../account/settings/components/base';
import {
  Radio,
  Form,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
  Drawer,
  Badge,
  Button,
  Card,
  Statistic,
  Descriptions,
  Divider,
  Dropdown,
  Menu,
  Popover,
  Steps,
  Table,
  Tooltip,
  Empty,
} from 'antd';
import { GridContent, PageContainer, RouteContext } from '@ant-design/pro-layout';
import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import { useRequest } from 'umi';
import { queryAdvancedProfile } from './service';
import styles from './style.less';
const { Step } = Steps;
const ButtonGroup = Button.Group;
// const menu = (
//   <Menu>
//     <Menu.Item key="1">选项一</Menu.Item>
//     <Menu.Item key="2">选项二</Menu.Item>
//     <Menu.Item key="3">选项三</Menu.Item>
//   </Menu>
// );
// const mobileMenu = (
//   <Menu>
//     <Menu.Item key="1">操作一</Menu.Item>
//     <Menu.Item key="2">操作二</Menu.Item>
//     <Menu.Item key="3">选项一</Menu.Item>
//     <Menu.Item key="4">选项二</Menu.Item>
//     <Menu.Item key="">选项三</Menu.Item>
//   </Menu>
// );

const { Option } = Select;

// class DrawerForm extends React.Component {
//   state = {
//     visible: false,
//     placement: 'left',
//   };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={this.showDrawer}>
//           设置
//         </Button>
//         <Drawer
//           title="Create a new account"
//           width={720}
//           onClose={this.onClose}
//           visible={this.state.visible}
//           bodyStyle={{ paddingBottom: 80 }}
//           extra={
//             <Space>
//               <Button onClick={this.onClose}>Cancel</Button>
//               <Button onClick={this.onClose} type="primary">
//                 Submit
//               </Button>
//             </Space>
//           }
//         >
//           <Form layout="vertical" hideRequiredMark>
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Form.Item
//                   name="name"
//                   label="Name"
//                   rules={[{ required: true, message: 'Please enter user name' }]}
//                 >
//                   <Input placeholder="Please enter user name" />
//                 </Form.Item>
//               </Col>
//               <Col span={12}>
//                 <Form.Item
//                   name="url"
//                   label="Url"
//                   rules={[{ required: true, message: 'Please enter url' }]}
//                 >
//                   <Input
//                     style={{ width: '100%' }}
//                     addonBefore="http://"
//                     addonAfter=".com"
//                     placeholder="Please enter url"
//                   />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Form.Item
//                   name="owner"
//                   label="Owner"
//                   rules={[{ required: true, message: 'Please select an owner' }]}
//                 >
//                   <Select placeholder="Please select an owner">
//                     <Option value="xiao">Xiaoxiao Fu</Option>
//                     <Option value="mao">Maomao Zhou</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col span={12}>
//                 <Form.Item
//                   name="type"
//                   label="Type"
//                   rules={[{ required: true, message: 'Please choose the type' }]}
//                 >
//                   <Select placeholder="Please choose the type">
//                     <Option value="private">Private</Option>
//                     <Option value="public">Public</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={12}>
//                 <Form.Item
//                   name="approver"
//                   label="Approver"
//                   rules={[{ required: true, message: 'Please choose the approver' }]}
//                 >
//                   <Select placeholder="Please choose the approver">
//                     <Option value="jack">Jack Ma</Option>
//                     <Option value="tom">Tom Liu</Option>
//                   </Select>
//                 </Form.Item>
//               </Col>
//               <Col span={12}>
//                 <Form.Item
//                   name="dateTime"
//                   label="DateTime"
//                   rules={[{ required: true, message: 'Please choose the dateTime' }]}
//                 >
//                   <DatePicker.RangePicker
//                     style={{ width: '100%' }}
//                     getPopupContainer={(trigger) => trigger.parentElement}
//                   />
//                 </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={24}>
//                 <Form.Item
//                   name="description"
//                   label="Description"
//                   rules={[
//                     {
//                       required: true,
//                       message: 'please enter url description',
//                     },
//                   ]}
//                 >
//                   <Input.TextArea rows={4} placeholder="please enter url description" />
//                 </Form.Item>
//               </Col>
//             </Row>
//           </Form>
//         </Drawer>
//       </>
//     );
//   }
// }

class Lookstyle extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        <div style={{ marginRight: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            设置
          </Button>
        </div>
        <Drawer
          title="个人设置"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          size="large"
        >
          <BaseView />
          <Button
            type="primary"
            onClick={this.onClose}
            style={{ marginTop: '15px', marginLeft: '8px' }}
          >
            取消
          </Button>
        </Drawer>
      </div>
    );
  }
}

const d = 123;
const clickOn = () => {
  return { d };
};
const action = (
  <RouteContext.Consumer>
    {({ isMobile }) => {
      if (isMobile) {
        return (
          <Dropdown.Button
            type="primary"
            icon={<DownOutlined />}
            overlay={mobileMenu}
            placement="bottomRight"
          >
            设置
          </Dropdown.Button>
        );
      }

      return (
        <Fragment>
          {/* <ButtonGroup>
            <Button>操作一</Button>
            <Button>操作二</Button>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>
                <EllipsisOutlined />
              </Button>
            </Dropdown>
          </ButtonGroup> */}
          {/* <DrawerForm /> */}
          <Lookstyle />
          {/* <Button type="primary" onClick={clickOn}>
            设置
          </Button> */}
        </Fragment>
      );
    }}
  </RouteContext.Consumer>
);
const extra = (
  <div className={styles.moreInfo}>
    <Statistic title="面试进度" value="部门审核" />
    {/* <Statistic title="订单金额" value={568.08} prefix="¥" /> */}
  </div>
);
const description = (
  <RouteContext.Consumer>
    {({ isMobile }) => (
      <Descriptions className={styles.headerList} size="small" column={isMobile ? 1 : 2}>
        <Descriptions.Item label="面试人">刘舒蕾</Descriptions.Item>
        <Descriptions.Item label="性别">男</Descriptions.Item>
        <Descriptions.Item label="工作性质">全职</Descriptions.Item>
        <Descriptions.Item label="期望薪资">100</Descriptions.Item>
        <Descriptions.Item label="到职日期">随时</Descriptions.Item>
        <Descriptions.Item label="备注">。。。</Descriptions.Item>
      </Descriptions>
    )}
  </RouteContext.Consumer>
);
const desc1 = (
  <div className={classNames(styles.textSecondary, styles.stepDescription)}>
    <Fragment>
      刘舒蕾
      <DingdingOutlined
        style={{
          marginLeft: 8,
        }}
      />
    </Fragment>
    <div>2022-99-99 99:99</div>
  </div>
);
const desc2 = (
  <div className={styles.stepDescription}>
    <Fragment>
      大牛牛
      <DingdingOutlined
        style={{
          color: '#00A0E9',
          marginLeft: 8,
        }}
      />
    </Fragment>
    <div>
      <a href="">查看进度</a>
    </div>
  </div>
);
const popoverContent = (
  <div
    style={{
      width: 160,
    }}
  >
    小牛牛
    <span
      className={styles.textSecondary}
      style={{
        float: 'right',
      }}
    >
      <Badge
        status="success"
        text={
          <span
            style={{
              color: 'rgba(0,255,0)',
            }}
          >
            已响应
          </span>
        }
      />
    </span>
    <div
      className={styles.textSecondary}
      style={{
        marginTop: 4,
      }}
    >
      耗时：2小时25分钟
    </div>
  </div>
);

const customDot = (dot, { status }) => {
  if (status === 'process') {
    return (
      <Popover placement="topLeft" arrowPointAtCenter content={popoverContent}>
        <span>{dot}</span>
      </Popover>
    );
  }

  return dot;
};

const operationTabList = [
  {
    key: 'tab1',
    tab: '紧急联系人',
  },
  // {
  //   key: 'tab2',
  //   tab: '操作日志二',
  // },
  // {
  //   key: 'tab3',
  //   tab: '操作日志三',
  // },
];
const columns = [
  {
    title: '关系',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '电话',
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      if (text === 'agree') {
        return '188888888';
      }

      return '188888888';
    },
  },
  {
    title: '性别',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: '职业',
    dataIndex: 'memo',
    key: 'memo',
  },
];

const Advanced = () => {
  const [tabStatus, seTabStatus] = useState({
    operationKey: 'tab1',
    tabActiveKey: 'detail',
  });
  const { data = {}, loading } = useRequest(queryAdvancedProfile);
  const { advancedOperation1, advancedOperation2, advancedOperation3 } = data;
  const contentList = {
    tab1: (
      <Table
        pagination={false}
        loading={loading}
        dataSource={advancedOperation1}
        columns={columns}
      />
    ),
    // tab2: (
    //   <Table
    //     pagination={false}
    //     loading={loading}
    //     dataSource={advancedOperation2}
    //     columns={columns}
    //   />
    // ),
    // tab3: (
    //   <Table
    //     pagination={false}
    //     loading={loading}
    //     dataSource={advancedOperation3}
    //     columns={columns}
    //   />
    // ),
  };

  const onTabChange = (tabActiveKey) => {
    seTabStatus({ ...tabStatus, tabActiveKey });
  };

  const onOperationTabChange = (key) => {
    seTabStatus({ ...tabStatus, operationKey: key });
  };

  const a = <Tabtodolist />;
  const c = <TodoList />;
  return (
    <PageContainer
      title="面试岗位：前端工程师"
      extra={action}
      className={styles.pageHeader}
      content={description}
      extraContent={extra}
      tabActiveKey={tabStatus.tabActiveKey}
      onTabChange={onTabChange}
      tabList={[
        {
          key: 'detail',
          tab: '简历',
        },
        {
          key: 'rule',
          tab: '应聘记录',
        },
        {
          key: 'list',
          tab: 'todoList',
        },
      ]}
    >
      {tabStatus.tabActiveKey == 'rule' ? (
        c
      ) : tabStatus.tabActiveKey == 'list' ? (
        a
      ) : tabStatus.tabActiveKey == 'detail' ? (
        <div className={styles.main}>
          <GridContent>
            <Card
              title="面试进度"
              style={{
                marginBottom: 24,
              }}
            >
              <RouteContext.Consumer>
                {({ isMobile }) => (
                  <Steps
                    direction={isMobile ? 'vertical' : 'horizontal'}
                    progressDot={customDot}
                    current={1}
                  >
                    <Step title="投递简历" description={desc1} />
                    <Step title="部门审核" description={desc2} />
                    <Step title="复试" />
                    <Step title="入职" />
                  </Steps>
                )}
              </RouteContext.Consumer>
            </Card>
            <Card
            // title="用户信息"
            // style={{
            //   marginBottom: 24,
            // }}
            // bordered={false}
            >
              {/* <Descriptions
            style={{
              marginBottom: 24,
            }}
          >
            <Descriptions.Item label="用户姓名">付小小</Descriptions.Item>
            <Descriptions.Item label="会员卡号">32943898021309809423</Descriptions.Item>
            <Descriptions.Item label="身份证">3321944288191034921</Descriptions.Item>
            <Descriptions.Item label="联系方式">18112345678</Descriptions.Item>
            <Descriptions.Item label="联系地址">
              曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
            </Descriptions.Item>
          </Descriptions> */}
              <Descriptions
              // style={{
              //   marginBottom: 24,
              // }}
              // title="信息组"
              >
                {/* <Descriptions.Item label="某某数据">725</Descriptions.Item>
            <Descriptions.Item label="该数据更新时间">2017-08-08</Descriptions.Item> */}
                {/* <Descriptions.Item
              label={
                <span>
                  某某数据
                  <Tooltip title="数据说明">
                    <InfoCircleOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.43)',
                        marginLeft: 4,
                      }}
                    />
                  </Tooltip>
                </span>
              }
            >
              725
            </Descriptions.Item>
            <Descriptions.Item label="该数据更新时间">2017-08-08</Descriptions.Item> */}
              </Descriptions>
              <h4
                style={{
                  marginBottom: 16,
                }}
              >
                教育信息
              </h4>
              <ul>
                <li>
                  <Card type="inner">
                    <Descriptions
                      style={{
                        marginBottom: 16,
                      }}
                      title="XXXXXX小学"
                    >
                      <Descriptions.Item label="时间">1999-2999</Descriptions.Item>
                      <Descriptions.Item label="地点">北极</Descriptions.Item>
                      <Descriptions.Item label="荣誉">班干部</Descriptions.Item>
                      <Descriptions.Item label="备注">。。。。。</Descriptions.Item>
                    </Descriptions>
                    <Divider
                      style={{
                        margin: '16px 0',
                      }}
                    />
                    <Descriptions
                      style={{
                        marginBottom: 16,
                      }}
                      title="XXXXXX中学"
                    >
                      <Descriptions.Item label="时间">2999-3999</Descriptions.Item>
                      <Descriptions.Item label="地点">南极</Descriptions.Item>
                      <Descriptions.Item label="荣誉">学习委员</Descriptions.Item>
                      <Descriptions.Item label="备注">学习良好 班级第一</Descriptions.Item>
                    </Descriptions>
                    <Divider
                      style={{
                        margin: '16px 0',
                      }}
                    />
                    <Descriptions
                      style={{
                        marginBottom: 16,
                      }}
                      title="XXXXXX高中"
                    >
                      <Descriptions.Item label="时间">3999-4999</Descriptions.Item>
                      <Descriptions.Item label="地点">中极</Descriptions.Item>
                      <Descriptions.Item label="荣誉">学生会</Descriptions.Item>
                      <Descriptions.Item label="备注">学生会长非常厉害</Descriptions.Item>
                    </Descriptions>
                  </Card>
                </li>
              </ul>
            </Card>
            <Card
              title="工作经历"
              style={{
                marginBottom: 24,
                marginTop: 24,
              }}
              bordered={false}
            >
              <Descriptions
                style={{
                  marginBottom: 16,
                }}
                title="XXXXXX单位"
              >
                <Descriptions.Item label="时间">5999-6999</Descriptions.Item>
                <Descriptions.Item label="地点">太平洋</Descriptions.Item>
                <Descriptions.Item label="职位">总管</Descriptions.Item>
                <Descriptions.Item label="23">手底下兄弟四五百个</Descriptions.Item>
                <Descriptions.Item label="备注">手底下兄弟四五百个</Descriptions.Item>
              </Descriptions>
            </Card>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              onTabChange={onOperationTabChange}
            >
              {contentList[tabStatus.operationKey]}
            </Card>
          </GridContent>
        </div>
      ) : null}
    </PageContainer>
  );
};

export default Advanced;
