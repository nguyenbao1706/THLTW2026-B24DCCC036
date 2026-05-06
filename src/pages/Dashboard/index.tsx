import { Card, Row, Col } from 'antd';
import { Column, Line } from '@ant-design/plots';

export default () => {
  const stats = [
    { title: 'Buổi tập', value: 12 },
    { title: 'Calo', value: 3200 },
    { title: 'Streak', value: 5 },
    { title: 'Mục tiêu', value: '75%' },
  ];

  const columnData = [
    { week: 'Tuần 1', value: 3 },
    { week: 'Tuần 2', value: 4 },
    { week: 'Tuần 3', value: 2 },
  ];

  const lineData = [
    { date: '1/1', weight: 70 },
    { date: '5/1', weight: 69 },
    { date: '10/1', weight: 68 },
  ];

  return (
    <>
      <Row gutter={16}>
        {stats.map((s) => (
          <Col span={6}>
            <Card title={s.title}>{s.value}</Card>
          </Col>
        ))}
      </Row>

      <Card title="Buổi tập theo tuần">
        <Column data={columnData} xField="week" yField="value" />
      </Card>

      <Card title="Cân nặng">
        <Line data={lineData} xField="date" yField="weight" />
      </Card>
    </>
  );
};