const Mock = require('mockjs');

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
  },
  "GET /api/usersList": ctx => {
    const total = 120
    const page = ctx.query.page
    const pageSize = ctx.query.pageSize
    let mockSize = pageSize
    if (page * pageSize > total && (page - 1) * pageSize < total) {
      mockSize = total - (page - 1) * pageSize
    }
    const mocklist = Mock.mock({
      [`list|${mockSize}`]: [{
        // 属性 key 是一个自增数，起始值为 1，每次增 1
        'key|+1': (page - 1) * pageSize + 1,
        name: () => Mock.Random.cname(),
        age: () => Mock.Random.natural(),
        address: () => Mock.Random.county(true),
      }]
    })
    ctx.body = {
      list: mocklist.list,
      total
    }
  },
  "POST /api/usersList": ctx => {
    const total = 120
    const page = ctx.request.body.page
    const pageSize = ctx.request.body.pageSize
    let mockSize = pageSize
    if (page * pageSize > total && (page - 1) * pageSize < total) {
      mockSize = total - (page - 1) * pageSize
    }
    const mocklist = Mock.mock({
      [`list|${mockSize}`]: [{
        // 属性 key 是一个自增数，起始值为 1，每次增 1
        'key|+1': (page - 1) * pageSize + 1,
        name: () => Mock.Random.cname(),
        age: () => Mock.Random.natural(),
        address: () => Mock.Random.county(true),
      }]
    })
    ctx.body = {
      list: mocklist.list,
      total
    }
  }
}
