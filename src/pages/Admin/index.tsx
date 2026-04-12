import { Table, Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [data, setData] = useState<any[]>([
    { id: 1, name: 'Đà Nẵng', price: 2000 },
  ]);

  const remove = (id: number) => {
    setData(data.filter(x => x.id !== id));
  };

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={[
        { title: 'Tên', dataIndex: 'name' },
        { title: 'Giá', dataIndex: 'price' },
        {
          title: 'Action',
          render: (x: any) => (
            <Button danger onClick={() => remove(x.id)}>Xóa</Button>
          ),
        },
      ]}
    />
  );
};