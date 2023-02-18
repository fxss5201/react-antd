import { useRequest } from 'ahooks';
import { Table, Typography } from 'antd';
import { useState } from 'react';
import { getUsersList } from '../../apis/users';

const { Paragraph } = Typography;

const PageMockUserList = () => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data = {}, error, loading, run: getUsersRun } = useRequest(getUsersList, {
    defaultParams: [{
      page: pageCurrent,
      pageSize
    }]
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
    return <Paragraph>failed to load</Paragraph>;
  }
  return <>
    <Paragraph className='my-3'>本页面使用 react-activation 进行了路由缓存，get请求数据</Paragraph>
    <Table
      sticky={{
        offsetHeader: 104
      }}
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
          getUsersRun({ page, pageSize });
          document.documentElement.scrollTop = 0;
        }
      }}
      bordered
    />
  </>
}

export default PageMockUserList;
