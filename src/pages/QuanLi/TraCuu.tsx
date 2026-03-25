import {Button,Form,Input,Modal,Table,DatePicker,Select,message,} from 'antd';
import { useEffect, useState } from 'react';
import { getData, setData } from '@/utils/storage';

export default () => {
  const [list, setList] = useState<any[]>([]);
  const [fields, setFields] = useState<any[]>([]);
  const [qdList, setQdList] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    setList(getData('vanbang') || []);
    setFields(getData('fields') || []);
    setQdList(getData('quyetdinh') || []);
  }, []);

  
  const getSoVaoSo = (qdId: number) => {
    const soList = getData('sovanbang') || [];
    const qd = qdList?.find((x) => x.id === qdId);
    if (!qd) return 1;

    const index = soList.findIndex((x) => x.id === qd.soVanBangId);
    if (index === -1) return 1;

    const next = (soList[index].soHienTai || 0) + 1;
    soList[index].soHienTai = next;

    setData('sovanbang', soList);
    return next;
  };

  const save = () => {
    form.validateFields().then((v) => {
      const soVaoSo = getSoVaoSo(v.quyetDinhId);

      const extra: any = {};
      (fields || []).forEach((f) => {
        if (f.kieu === 'date') {
          extra[f.ten] = v[f.ten]?.format('YYYY-MM-DD') || '';
        } else {
          extra[f.ten] = v[f.ten] || '';
        }
      });

      const newItem = {
        id: Date.now(),
        soVaoSo,
        soHieu: v.soHieu,
        msv: v.msv,
        hoTen: v.hoTen,
        ngaySinh: v.ngaySinh?.format('YYYY-MM-DD'),
        quyetDinhId: v.quyetDinhId,
        extra,
      };

      const newData = [...list, newItem];
      setData('vanbang', newData);
      setList(newData);

      message.success('Thêm thành công');

      setOpen(false);
      form.resetFields();
    });
  };

  const columns = [
    { title: 'Số vào sổ', dataIndex: 'soVaoSo' },
    { title: 'Số hiệu', dataIndex: 'soHieu' },
    { title: 'MSV', dataIndex: 'msv' },
    { title: 'Họ tên', dataIndex: 'hoTen' },
    { title: 'Ngày sinh', dataIndex: 'ngaySinh' },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Thêm văn bằng
      </Button>

      <Table dataSource={list} columns={columns} rowKey="id" />

      <Modal
        visible={open}
        onOk={save}
        onCancel={() => setOpen(false)}
        title="Thêm văn bằng"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="soHieu" label="Số hiệu" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="msv" label="MSV" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="hoTen" label="Họ tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="ngaySinh" label="Ngày sinh" rules={[{ required: true }]}>
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="quyetDinhId"
            label="Quyết định"
            rules={[{ required: true }]}
          >
            <Select
              options={(qdList || []).map((q) => ({
                label: q.soQD,
                value: q.id,
              }))}
            />
          </Form.Item>

          {/* 🔥 FIELD ĐỘNG */}
          {(fields || []).map((f) => (
            <Form.Item key={f.id} name={f.ten} label={f.ten}>
              {f.kieu === 'string' && <Input />}
              {f.kieu === 'number' && <Input type="number" />}
              {f.kieu === 'date' && <DatePicker />}
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};