const mylist = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const mydata = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]; 
const advancedOperation1 = [
  {
    key: 'op1',
    type: '母亲',
    name: '奥特之母',
    status: 'agree',
    updatedAt: '女',
    memo: '奥特曼的妈妈',
  },
  {
    key: 'op2',
    type: '父亲',
    name: '奥特之父',
    status: 'agree',
    updatedAt: '男',
    memo: '奥特曼的爸爸',
  },
  {
    key: 'op3',
    type: '大王',
    name: '奥特之王',
    status: 'agree',
    updatedAt: '男',
    memo: '警备队头头',
  },
  {
    key: 'op4',
    type: '兄弟',
    name: '迪迦',
    status: 'agree',
    updatedAt: '男',
    memo: '远古奥特曼',
  },
  {
    key: 'op5',
    type: '朋友',
    name: '泰罗',
    status: 'agree',
    updatedAt: '男',
    memo: '保卫地球的奥特曼',
  },
];
const advancedOperation2 = [
  {
    key: 'op1',
    type: '订购关系生效',
    name: '曲丽丽',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];
const advancedOperation3 = [
  {
    key: 'op1',
    type: '创建订单',
    name: '汗牙牙',
    status: 'agree',
    updatedAt: '2017-10-03  19:23:12',
    memo: '-',
  },
];

function getProfileAdvancedData(req, res) {
  const result = {
    data: {
      advancedOperation1,
      advancedOperation2,
      advancedOperation3,
      mylist,
      mydata,
    },
  };
  return res.json(result);
}

export default {
  'GET  /api/profile/advanced': getProfileAdvancedData,
};
