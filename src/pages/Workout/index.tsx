import { Table, Button, Modal, Form, Input, Select } from 'antd';
import { useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const columns = [
    { title: 'Ngày', dataIndex: 'date' },
    { title: 'Loại', dataIndex: 'type' },
    { title: 'Thời lượng', dataIndex: 'duration' },
    { title: 'Calo', dataIndex: 'calo' },
    {
      title: 'Action',
      render: (_, r) => (
        <Button danger onClick={() => handleDelete(r.id)}>Xóa</Button>
      ),
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((i) => i.id !== id));
  };

  const handleAdd = () => {
    form.validateFields().then((v) => {
      setData([...data, { ...v, id: Date.now() }]);
      setOpen(false);
      form.resetFields();
    });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Thêm</Button>

      <Table columns={columns} dataSource={data} rowKey="id" />

      <Modal visible={open} onOk={handleAdd} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="date" label="Ngày">
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Loại">
            <Select
              options={[
                { value: 'Cardio' },
                { value: 'Strength' },
                { value: 'Yoga' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};