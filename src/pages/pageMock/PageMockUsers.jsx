import { useState } from 'react';
import axios from 'axios';
import { useRequest } from 'ahooks';
import { Table, Button, Modal } from 'antd';

function getUsers() {
  return axios.get('/api/users')
}

function getUsersDetail(id) {
  return axios.get(`/api/users/${id}`)
}

const PageMockUsers = () => {
  const { data, error, loading } = useRequest(getUsers);
  const { data: detailData, error: detailError, loading: detailLoading, run: getDetail } = useRequest(getUsersDetail, {
    manual: true
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
      title: '操作',
      key: 'action',
      render: (_, record) => <Button onClick={(e) => showModal(record.key, e)} type="link" className='pl-0 pr-0'>详情</Button>,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (key) => {
    setIsModalOpen(true);
    getDetail(key);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  const ModalContent = () => {
    if (detailError) {
      return <div>failed to load</div>;
    }
    if (detailLoading) {
      return <div>loading...</div>;
    }
    return (
      <>
        <div>{detailData.data.name}</div>
        <div>{detailData.data.age}</div>
        <div>{detailData.data.address}</div>
      </>
    )
  }
  return (
    <>
      <Table columns={columns} dataSource={data.data} bordered pagination={false} />
      <Modal title="用户详情" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ModalContent></ModalContent>
      </Modal>
    </>
  );
}

export default PageMockUsers;
