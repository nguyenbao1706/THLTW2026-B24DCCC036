import { Table, Input } from 'antd';
import { useState } from 'react';
import { getTasks } from '@/models/task';

export default () => {
  const [data] = useState(getTasks());
  const [keyword, setKeyword] = useState('');

  const filtered = data.filter((t) =>
    t.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <Input.Search onChange={(e) => setKeyword(e.target.value)} />

      <Table
        rowKey="id"
        dataSource={filtered}
        columns={[
          { title: 'Tên', dataIndex: 'title' },
          { title: 'Deadline', dataIndex: 'deadline' },
          { title: 'Trạng thái', dataIndex: 'status' },
        ]}
      />
    </>
  );
};