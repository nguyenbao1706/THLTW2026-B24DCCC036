import { Table, Button, Modal, Input } from 'antd';
import { useState } from 'react';
import { tags } from '@/models/blog';

export default () => {
  const [data, setData] = useState(tags);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const add = () => {
    setData([...data, name]);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Thêm Tag</Button>

      <Table
        dataSource={data.map((t) => ({ name: t }))}
        columns={[
          { title: 'Tên', dataIndex: 'name' },
        ]}
      />

      <Modal visible={open} onOk={add} onCancel={() => setOpen(false)}>
        <Input onChange={(e) => setName(e.target.value)} />
      </Modal>
    </>
  );
};