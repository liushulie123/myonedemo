import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Space, Checkbox, Divider } from 'antd';
import './tabTodolist.less';
import { AudioOutlined } from '@ant-design/icons';

//多选框
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
const [indeterminate, setIndeterminate] = React.useState(true);
const [checkAll, setCheckAll] = React.useState(false);

const onChange = (list) => {
  setCheckedList(list);
  setIndeterminate(!!list.length && list.length < plainOptions.length);
  setCheckAll(list.length === plainOptions.length);
};

const onCheckAllChange = (e) => {
  setCheckedList(e.target.checked ? plainOptions : []);
  setIndeterminate(false);
  setCheckAll(e.target.checked);
};

//带button的input输入框
const { Search } = Input;

class Tabtodolist extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '任务',
        dataIndex: 'name',
        width: '90%',
        editable: true,
      },
      {
        title: '删除',
        dataIndex: 'operation',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          name: '123',
        },
        {
          key: '1',
          name: '456',
        },
      ],
      count: 2,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = (value) => {
    const { count, dataSource } = this.state;
    //判断是否输入为空
    if (value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    const newData = {
      key: count,
      name: value,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    // console.log(value);
  };

  render() {
    const { dataSource } = this.state;
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          title: col.title,
        }),
      };
    });
    return (
      <div>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          Check all
        </Checkbox>
        <Divider />
        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        <Space direction="vertical">
          <Search
            placeholder="请输入你的任务"
            enterButton="添加任务"
            size="large"
            onSearch={this.handleAdd}
            type="primary"
          />
        </Space>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
export default Tabtodolist;
