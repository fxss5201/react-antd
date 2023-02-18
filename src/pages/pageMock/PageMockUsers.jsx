import { useState } from 'react';
import { useRequest } from 'ahooks';
import { Table, Button, Modal, Spin } from 'antd';
import { getUsers, getUsersDetail } from '../../apis/users';

const PageMockUsers = () => {
  const { data = {}, error, loading } = useRequest(getUsers);
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
      render: (_, record) => <Button onClick={(e) => showModal(record.key, e)} type="dashed" size="small">详情</Button>,
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

  const ModalContent = () => {
    if (detailError) {
      return <div>failed to load</div>;
    }
    return (
      <Spin spinning={detailLoading}>
        <div>{detailData?.data?.name}</div>
        <div>{detailData?.data?.age}</div>
        <div>{detailData?.data?.address}</div>
      </Spin>
    )
  }
  return (
    <>
      <Table columns={columns} dataSource={data?.data || []} loading={loading} bordered pagination={false} />
      <Modal title="用户详情" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <ModalContent></ModalContent>
      </Modal>
    </>
  );
}

export default PageMockUsers;
