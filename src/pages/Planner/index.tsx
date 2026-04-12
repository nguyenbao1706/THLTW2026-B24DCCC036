import { useState } from 'react';
import { Button, List } from 'antd';

export default () => {
  const [plan, setPlan] = useState<any[]>([]);

  const add = () => {
    const item = { id: Date.now(), name: 'Địa điểm mới', cost: 500 };
    setPlan([...plan, item]);
  };

  const remove = (id: number) => {
    setPlan(plan.filter(x => x.id !== id));
  };

  const total = plan.reduce((sum, x) => sum + x.cost, 0);

  return (
    <>
      <Button onClick={add}>Thêm địa điểm</Button>

      <List
        dataSource={plan}
        renderItem={(item) => (
          <List.Item
            actions={[<a onClick={() => remove(item.id)}>Xóa</a>]}
          >
            {item.name} - {item.cost} VND
          </List.Item>
        )}
      />

      <h3>Tổng chi phí: {total} VND</h3>
    </>
  );
};