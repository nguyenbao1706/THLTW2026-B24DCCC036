import { Pie } from '@ant-design/plots';

export default () => {
  const data = [
    { type: 'Ăn uống', value: 300 },
    { type: 'Di chuyển', value: 500 },
    { type: 'Lưu trú', value: 700 },
  ];

  const config = {
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8, // ⚠️ thêm cái này
    label: {
      type: 'outer',
      content: '{name} {percentage}', // ⚠️ thêm label
    },
    interactions: [
      { type: 'element-active' },
    ],
  };

  return (
    <>
      <Pie {...config} />
      <h3>Tổng: 1500 VND</h3>
    </>
  );
};