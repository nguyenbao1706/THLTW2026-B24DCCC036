import { Table, Button } from 'antd';
import { useState, useEffect } from 'react';
import { getData, setData } from '@/utils/storage';

export default () => {
  const [data, setDataState] = useState<any[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  useEffect(() => {
    setDataState(getData('dangky'));
  }, []);

  const update = (status: string) => {
    const list = getData('dangky');
    const updated = list.map((x: any) =>
      selectedRowKeys.includes(x.id) ? { ...x, status } : x
    );
    setData('dangky', updated);
    setDataState(updated);
  };

  return (
    <>
      <Button onClick={() => update('Approved')}>Duyệt</Button>
      <Button danger onClick={() => update('Rejected')}>Từ chối</Button>

      <Table
        rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
        rowKey="id"
        dataSource={data}
        columns={[
          { title: 'Tên', dataIndex: 'name' },
          { title: 'Email', dataIndex: 'email' },
          { title: 'Trạng thái', dataIndex: 'status' },
        ]}
      />
    </>
  );
};