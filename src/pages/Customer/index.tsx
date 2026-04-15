import { Table } from 'antd';

const data = [
  { id: 1, name: 'Nguyễn Văn A' },
  { id: 2, name: 'Trần Văn B' },
];

export default () => {
  return (
    <>
      <h2>Danh sách khách hàng</h2>

      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: 'ID', dataIndex: 'id' },
          { title: 'Tên', dataIndex: 'name' },
        ]}
      />
    </>
  );
};