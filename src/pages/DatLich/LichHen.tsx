import { Button, Form, Select, DatePicker, Modal, Table, message } from 'antd';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { getData, setData } from '../../utils/storage';

export default () => {
  const [data, setList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const nhanvien = getData('nhanvien');
  const dichvu = getData('dichvu');

  useEffect(() => {
    setList(getData('lichhen'));
  }, []);

  const checkTrung = (nv: any, time: any) => {
    return data.some(
      (i) =>
        i.nhanvien === nv &&
        dayjs(i.time).format('YYYY-MM-DD HH:mm') ===
          dayjs(time).format('YYYY-MM-DD HH:mm')
    );
  };

  const save = () => {
    form.validateFields().then((v) => {
      if (checkTrung(v.nhanvien, v.time)) {
        message.error('Trùng lịch!');
        return;
      }

      const newData = [
        ...data,
        { ...v, id: Date.now(), status: 'Chờ duyệt' },
      ];
      setData('lichhen', newData);
      setList(newData);
      setOpen(false);
    });
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Đặt lịch</Button>

      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: 'Nhân viên', dataIndex: 'nhanvien' },
          { title: 'Dịch vụ', dataIndex: 'dichvu' },
          {
            title: 'Thời gian',
            render: (r) => dayjs(r.time).format('DD/MM HH:mm'),
          },
          { title: 'Trạng thái', dataIndex: 'status' },
        ]}
      />

      <Modal visible={open} onOk={save} onCancel={() => setOpen(false)}>
        <Form form={form}>
          <Form.Item name="nhanvien" label="Nhân viên">
            <Select options={nhanvien.map((i: any) => ({ value: i.ten }))} />
          </Form.Item>

          <Form.Item name="dichvu" label="Dịch vụ">
            <Select options={dichvu.map((i: any) => ({ value: i.ten }))} />
          </Form.Item>

          <Form.Item name="time" label="Thời gian">
            <DatePicker showTime />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};