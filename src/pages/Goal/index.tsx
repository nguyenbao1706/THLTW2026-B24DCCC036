import { Card, Progress, Input, Popconfirm } from 'antd';
import { useState } from 'react';

export default () => {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Giảm cân', current: 5, target: 10 },
  ]);

  return (
    <>
      {goals.map((g) => (
        <Card key={g.id} title={g.name}>
          <Input
            value={g.current}
            onChange={(e) => {
              const val = +e.target.value;
              setGoals(
                goals.map((i) =>
                  i.id === g.id ? { ...i, current: val } : i
                )
              );
            }}
          />

          <Progress percent={(g.current / g.target) * 100} />

          <Popconfirm
            title="Xóa?"
            onConfirm={() =>
              setGoals(goals.filter((i) => i.id !== g.id))
            }
          >
            <a>Xóa</a>
          </Popconfirm>
        </Card>
      ))}
    </>
  );
};