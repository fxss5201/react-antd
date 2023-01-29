module.exports = {
  // 返回值可以是数组形式
  '/api/users': [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    }
  ],
  // 返回值也可以是对象形式
  'GET /api/users/1': {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  // 自定义函数
  "GET /api/users/2": ctx => {
    ctx.body = {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    };
  }
}
