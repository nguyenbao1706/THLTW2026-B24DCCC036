import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { getData } from '@/utils/storage';

export default () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(getData('dangky').filter((x: any) => x.status === 'Approved'));
  }, []);

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={[
        { title: 'Tên', dataIndex: 'name' },
        { title: 'Email', dataIndex: 'email' },
      ]}
    />
  );
};