import { Card, Row, Col, Tag, Modal } from 'antd';
import { useState } from 'react';

export default () => {
  const [selected, setSelected] = useState(null);

  const data = [
    { id: 1, name: 'Push Up', level: 'Dễ', muscle: 'Chest' },
  ];

  return (
    <>
      <Row gutter={16}>
        {data.map((e) => (
          <Col span={8}>
            <Card onClick={() => setSelected(e)}>
              <h3>{e.name}</h3>
              <Tag>{e.level}</Tag>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal visible={!!selected} onCancel={() => setSelected(null)}>
        <h2>{selected?.name}</h2>
      </Modal>
    </>
  );
};