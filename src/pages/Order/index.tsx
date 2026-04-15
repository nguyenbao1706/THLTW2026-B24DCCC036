import {Table,Button,Input,Select,Modal,Form,message,Tag,} from 'antd';
import { useState } from 'react';

const customers = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Văn B' },
];

const products = [
  { id: 1, name: 'Áo', price: 100 },
  { id: 2, name: 'Quần', price: 200 },
  { id: 3, name: 'Giày', price: 300 },
];

export default () => {
  const [list, setList] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<any>();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form] = Form.useForm();

  
  const calcTotal = (ids: number[]) => {
    return ids.reduce((sum, id) => {
      const p = products.find(x => x.id === id);
      return sum + (p?.price || 0);
    }, 0);
  };

  
  const save = async () => {
    const v = await form.validateFields();

    if (!editing) {
      
      if (list.find(x => x.code === v.code)) {
        message.error('Trùng mã đơn!');
        return;
      }

      const total = calcTotal(v.products);

      setList([
        ...list,
        {
          ...v,
          total,
          status: 'pending',
          date: new Date().toLocaleDateString(),
        },
      ]);
    } else {
      const total = calcTotal(v.products);

      setList(
        list.map(x =>
          x.code === editing.code ? { ...editing, ...v, total } : x
        )
      );
    }

    setEditing(null);
    setOpen(false);
    form.resetFields();
  };

  
  const edit = (record: any) => {
    setEditing(record);
    setOpen(true);
    form.setFieldsValue(record);
  };

  
  const cancelOrder = (record: any) => {
    if (record.status !== 'pending') {
      message.error('Chỉ hủy khi chờ!');
      return;
    }

    Modal.confirm({
      title: 'Xác nhận hủy đơn?',
      onOk() {
        setList(list.map(x =>
          x.code === record.code ? { ...x, status: 'cancel' } : x
        ));
      },
    });
  };

  
  const filtered = list
    .filter(x =>
      x.code.includes(search) ||
      customers.find(c => c.id === x.customerId)?.name.includes(search)
    )
    .filter(x => (status ? x.status === status : true));

  return (
    <div>
      <h2>Quản lý đơn hàng</h2>

      {/* SEARCH */}
      <Input
        placeholder="Tìm..."
        onChange={e => setSearch(e.target.value)}
        style={{ width: 200, marginRight: 10 }}
      />

      {/* FILTER */}
      <Select
        placeholder="Trạng thái"
        allowClear
        style={{ width: 150 }}
        onChange={setStatus}
        options={[
          { value: 'pending', label: 'Chờ' },
          { value: 'shipping', label: 'Đang giao' },
          { value: 'done', label: 'Hoàn thành' },
          { value: 'cancel', label: 'Hủy' },
        ]}
      />

      <Button type="primary" onClick={() => setOpen(true)} style={{ marginLeft: 10 }}>
        Thêm đơn
      </Button>

      {/* TABLE */}
      <Table
        rowKey="code"
        dataSource={filtered}
        columns={[
          { title: 'Mã', dataIndex: 'code' },
          {
            title: 'Khách',
            render: (_, r) =>
              customers.find(c => c.id === r.customerId)?.name,
          },
          { title: 'Ngày', dataIndex: 'date', sorter: (a, b) => a.date.localeCompare(b.date) },
          { title: 'Tổng', dataIndex: 'total', sorter: (a, b) => a.total - b.total },
          {
            title: 'Trạng thái',
            render: (_, r) => {
              const colorMap: any = {
                pending: 'orange',
                shipping: 'blue',
                done: 'green',
                cancel: 'red',
              };
              return <Tag color={colorMap[r.status]}>{r.status}</Tag>;
            },
          },
          {
            title: 'Action',
            render: (_, r) => (
              <>
                <Button onClick={() => edit(r)}>Sửa</Button>
                <Button danger onClick={() => cancelOrder(r)} style={{ marginLeft: 5 }}>
                  Hủy
                </Button>
              </>
            ),
          },
        ]}
      />

      {/* MODAL */}
      <Modal
        title={editing ? 'Sửa đơn' : 'Thêm đơn'}
        visible={open}
        onCancel={() => setOpen(false)}
        onOk={save}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="code" label="Mã đơn" rules={[{ required: true }]}>
            <Input disabled={!!editing} />
          </Form.Item>

          <Form.Item name="customerId" label="Khách" rules={[{ required: true }]}>
            <Select
              options={customers.map(c => ({
                value: c.id,
                label: c.name,
              }))}
            />
          </Form.Item>

          <Form.Item name="products" label="Sản phẩm" rules={[{ required: true }]}>
            <Select
              mode="multiple"
              options={products.map(p => ({
                value: p.id,
                label: `${p.name} (${p.price})`,
              }))}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};