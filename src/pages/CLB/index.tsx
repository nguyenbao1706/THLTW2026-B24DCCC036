import { Table, Button } from 'antd';
import { useEffect, useState } from 'react';
import { getData, setData } from '@/utils/storage';

export default () => {
  const [data, setDataState] = useState<any[]>([]);

  useEffect(() => {
    setDataState(getData('clb'));
  }, []);

  const remove = (id: number) => {
    const newData = data.filter(x => x.id !== id);
    setData('clb', newData);
    setDataState(newData);
  };

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={[
        { title: 'Tên', dataIndex: 'ten' },
        { title: 'Chủ nhiệm', dataIndex: 'chuNhiem' },
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