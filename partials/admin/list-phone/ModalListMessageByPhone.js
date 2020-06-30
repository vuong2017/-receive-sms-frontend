import { useState } from 'react';
import { Table } from 'antd';
import BaseModal from "@/components/Modals/BaseModal";


const ModalListMessageByPhone = (props) => {
  const {
    visible,
    handleCancel,
    width,
    title,
    dataListMessage
  } = props;

  const [columns,] = useState([
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ])

  return (
    <BaseModal
      width={width}
      title={title}
      visible={visible}
      onCancel={handleCancel}
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataListMessage}
      // pagination={pagination}
      // onChange={handleTableChange}
      />
    </BaseModal>
  )
}

export default ModalListMessageByPhone;