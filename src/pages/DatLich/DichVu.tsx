import { Button, Form, Input, Modal, Table } from 'antd';
import { useState, useEffect } from 'react';
import { getData, setData } from '../../utils/storage';

export default () => {
  const [data, setList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setList(getData('dichvu'));
  }, []);

  const save = () => {
    form.validateFields().then((v) => {
      const newData = [...data, { ...v, id: Date.now() }];
      setData('dichvu', newData);
      setList(newData);
      setOpen(false);
    });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Thêm dịch vụ</Button>

      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: 'Tên', dataIndex: 'ten' },
          { title: 'Giá', dataIndex: 'gia' },
          { title: 'Thời gian (phút)', dataIndex: 'time' },
        ]}
      />

      <Modal visible={open} onOk={save} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="ten" label="Tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="gia" label="Giá">
            <Input />
          </Form.Item>
          <Form.Item name="time" label="Thời gian">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};