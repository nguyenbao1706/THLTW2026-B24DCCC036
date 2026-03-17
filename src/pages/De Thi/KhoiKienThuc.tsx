import { Table, Button, Modal, Form, Input } from 'antd';
import { useState, useEffect } from 'react';

const KEY = 'khoi';

export default () => {
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(KEY) || '[]'));
  }, []);

  const add = () => {
    form.validateFields().then(v => {
      const newData = [...data, { id: Date.now(), ...v }];
      setData(newData);
      localStorage.setItem(KEY, JSON.stringify(newData));
      setOpen(false);
      form.resetFields();
    });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Thêm</Button>
      <Table rowKey="id" dataSource={data} columns={[
        { title: 'Mã', dataIndex: 'ma' },
        { title: 'Tên', dataIndex: 'ten' },
      ]} />

      <Modal visible={open} onOk={add} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="ma" label="Mã" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="ten" label="Tên" rules={[{ required: true }]}><Input /></Form.Item>
        </Form>
      </Modal>
    </>
  );
};