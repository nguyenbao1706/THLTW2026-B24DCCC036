import { Button, Form, Input, Modal, Select, Table } from 'antd';
import { useState, useEffect } from 'react';
import { getData, setData } from '@/utils/storage';

export default () => {
  const [list, setList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setList(getData('fields'));
  }, []);

  const save = () => {
    form.validateFields().then((v) => {
      const newData = [...list, { ...v, id: Date.now() }];
      setData('fields', newData);
      setList(newData);
      setOpen(false);
    });
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>Thêm field</Button>

      <Table dataSource={list} rowKey="id"
        columns={[
          { title: 'Tên', dataIndex: 'ten' },
          { title: 'Kiểu', dataIndex: 'kieu' },
        ]}
      />

      <Modal visible ={open} onOk={save} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="ten" label="Tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="kieu" label="Kiểu">
            <Select
              options={[
                { label: 'String', value: 'string' },
                { label: 'Number', value: 'number' },
                { label: 'Date', value: 'date' },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};