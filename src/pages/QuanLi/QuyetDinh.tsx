import { Button, Form, Input, Modal, Table, DatePicker, Select } from 'antd';
import { useEffect, useState } from 'react';
import { getData, setData } from '@/utils/storage';

export default () => {
  const [list, setList] = useState<any[]>([]);
  const [so, setSo] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setList(getData('quyetdinh'));
    setSo(getData('sovanbang'));
  }, []);

  const save = () => {
    form.validateFields().then((v) => {
      const newData = [
        ...list,
        {
          ...v,
          id: Date.now(),
          ngayBanHanh: v.ngayBanHanh.format('YYYY-MM-DD'),
          luotTraCuu: 0,
        },
      ];
      setData('quyetdinh', newData);
      setList(newData);
      setOpen(false);
    });
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>Thêm</Button>

      <Table dataSource={list} rowKey="id"
        columns={[
          { title: 'Số QĐ', dataIndex: 'soQD' },
          { title: 'Ngày', dataIndex: 'ngayBanHanh' },
          { title: 'Lượt tra cứu', dataIndex: 'luotTraCuu' },
        ]}
      />

      <Modal visible ={open} onOk={save} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="soQD" label="Số QĐ" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="ngayBanHanh" label="Ngày" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item name="soVanBangId" label="Sổ">
            <Select
              options={so.map((s) => ({
                label: `Năm ${s.nam}`,
                value: s.id,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};