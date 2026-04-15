import { Table } from 'antd';

const data = [
  { id: 1, name: 'Áo', price: 100 },
  { id: 2, name: 'Quần', price: 200 },
];

export default () => {
  return (
    <>
      <h2>Danh sách sản phẩm</h2>

      <Table
        rowKey="id"
        dataSource={data}
        columns={[
          { title: 'ID', dataIndex: 'id' },
          { title: 'Tên', dataIndex: 'name' },
          { title: 'Giá', dataIndex: 'price' },
        ]}
      />
    </>
  );
};