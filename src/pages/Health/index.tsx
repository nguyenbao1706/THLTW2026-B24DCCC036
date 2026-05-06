import { Table, Tag } from 'antd';
import { useState } from 'react';

export default () => {
  const [data] = useState([
    { date: '1/1', weight: 70, height: 170 },
  ]);

  const calcBMI = (w, h) => (w / ((h / 100) ** 2)).toFixed(1);

  const getTag = (bmi) => {
    if (bmi < 18.5) return <Tag color="blue">Thiếu cân</Tag>;
    if (bmi < 25) return <Tag color="green">Bình thường</Tag>;
    if (bmi < 30) return <Tag color="gold">Thừa cân</Tag>;
    return <Tag color="red">Béo phì</Tag>;
  };

  const columns = [
    { title: 'Ngày', dataIndex: 'date' },
    { title: 'Cân nặng', dataIndex: 'weight' },
    {
      title: 'BMI',
      render: (_, r) => {
        const bmi = calcBMI(r.weight, r.height);
        return (
          <>
            {bmi} {getTag(bmi)}
          </>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};