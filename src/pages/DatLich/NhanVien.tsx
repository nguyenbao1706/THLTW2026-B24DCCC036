import { Button, Form, Input, Modal, Table } from 'antd';
import { useState, useEffect } from 'react';
import { getData, setData } from '@/utils/storage';


export default () => {
  const [data, setList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setList(getData('nhanvien'));
  }, []);

  const save = () => {
    form.validateFields().then((v) => {
      const newData = [...data, { ...v, id: Date.now() }];
      setData('nhanvien', newData);
      setList(newData);
      setOpen(false);
      form.resetFields();
    });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Thêm nhân viên</Button>

      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: 'Tên', dataIndex: 'ten' },
          { title: 'Giới hạn/ngày', dataIndex: 'limit' },
          { title: 'Lịch làm', dataIndex: 'lich' },
        ]}
      />

      <Modal visible={open} onOk={save} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="ten" label="Tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="limit" label="Số khách/ngày">
            <Input />
          </Form.Item>
          <Form.Item name="lich" label="Lịch làm">
            <Input placeholder="VD: 9h-17h T2-T6" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};