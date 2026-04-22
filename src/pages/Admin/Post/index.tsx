import { Button, Popconfirm, Form, Table } from 'antd';

export default () => {
  const [form] = Form.useForm();

  const deletePost = (id: number) => {
    console.log('Delete post:', id);
  };

  const handleAdd = () => {
    form.validateFields().then(() => {
      console.log('Submit');
      form.resetFields();
    });
  };

  const columns = [
    { title: 'Tiêu đề', dataIndex: 'title' },
    { title: 'Trạng thái', dataIndex: 'status' },
    { title: 'Views', dataIndex: 'views' },
    {
      title: 'Action',
      render: (_: any, r: any) => (
        <Popconfirm
          title="Xác nhận xóa?"
          onConfirm={() => deletePost(r.id)}
        >
          <Button danger>Xóa</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={[]}
      rowKey="id"
    />
  );
};