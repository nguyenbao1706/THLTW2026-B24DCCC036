import { Card, Row, Col } from 'antd';
import { getTasks } from '@/models/task';

export default () => {
  const data = getTasks();

  const total = data.length;
  const done = data.filter((t) => t.status === 'done').length;
  const overdue = data.filter(
    (t) => t.deadline && new Date(t.deadline) < new Date()
  ).length;

  return (
    <Row gutter={16}>
      <Col span={8}><Card title="Tổng task">{total}</Card></Col>
      <Col span={8}><Card title="Hoàn thành">{done}</Card></Col>
      <Col span={8}><Card title="Quá hạn">{overdue}</Card></Col>
    </Row>
  );
};