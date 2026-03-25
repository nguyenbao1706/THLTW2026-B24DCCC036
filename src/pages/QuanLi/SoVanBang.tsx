import { Button, Form, Input, Modal, Table, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { getData, setData } from '@/utils/storage';

export default () => {
  const [list, setList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setList(getData('sovanbang'));
  }, []);

  const save = () => {
    form.validateFields().then((v) => {
      const newData = [...list, { id: Date.now(), nam: v.nam, soHienTai: 0 }];
      setData('sovanbang', newData);
      setList(newData);
      setOpen(false);
    });
  };

  const remove = (id: number) => {
    const newData = list.filter((x) => x.id !== id);
    setData('sovanbang', newData);
    setList(newData);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>Thêm</Button>

      <Table
        dataSource={list}
        rowKey="id"
        columns={[
          { title: 'Năm', dataIndex: 'nam' },
          { title: 'Số hiện tại', dataIndex: 'soHienTai' },
          {
            title: 'Action',
            render: (_, r) => (
              <Popconfirm title="Xóa?" onConfirm={() => remove(r.id)}>
                <Button danger>Xóa</Button>
              </Popconfirm>
            ),
          },
        ]}
      />

      <Modal visible ={open} onOk={save} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="nam" label="Năm" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};