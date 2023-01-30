import axios from 'axios';
import { useRequest } from 'ahooks';
import { Table } from 'antd';
import { useState } from 'react';

function getUsers(pageCurrent, pageSize) {
  return axios.get('/api/usersList', {
    params: {
      page: pageCurrent,
      pageSize: pageSize
    }
  })
}


const PageMockUsers = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data = {}, error, loading, run: getUsersRun } = useRequest(getUsers, {
    defaultParams: [pageCurrent, pageSize]
  });

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address'
    }
  ];

  if (error) {
    return <div>failed to load</div>;
  }
  return <div style={{height: 'calc(100vh - 198px)'}}>
    <Table
      loading={loading}
      columns={columns}
      dataSource={data?.data?.list || []}
      pagination={{ 
        position: ['bottomCenter'],
        total: data?.data?.total || 0,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total) => `总共${data?.data?.total || 0}条`,
        current: pageCurrent,
        pageSize: pageSize,
        onChange: (page, pageSize) => {
          setPageCurrent(page);
          setPageSize(pageSize);
          getUsersRun(page, pageSize);
        }
      }}
      scroll={{ scrollToFirstRowOnChange: true, y: 'calc(100vh - 298px)' }}
      bordered
    />
  </div>;
}

export default PageMockUsers;
