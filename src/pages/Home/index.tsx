import { Row, Col, Select } from 'antd';
import { useState } from 'react';
import DestinationCard from '@/components/DestinationCard';

const data = [
  { id: 1, name: 'Đà Nẵng', type: 'Biển', price: 2000, rating: 4, image: 'https://picsum.photos/300' },
  { id: 2, name: 'Sapa', type: 'Núi', price: 1500, rating: 5, image: 'https://picsum.photos/301' },
];

export default () => {
  const [list, setList] = useState(data);

  const filter = (type: string) => {
    if (!type) return setList(data);
    setList(data.filter(x => x.type === type));
  };

  return (
    <>
      <Select
        placeholder="Lọc loại"
        style={{ width: 200, marginBottom: 16 }}
        onChange={filter}
        allowClear
      >
        <Select.Option value="Biển">Biển</Select.Option>
        <Select.Option value="Núi">Núi</Select.Option>
      </Select>

      <Row gutter={[16, 16]}>
        {list.map(item => (
          <Col xs={24} sm={12} md={8} key={item.id}>
            <DestinationCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};