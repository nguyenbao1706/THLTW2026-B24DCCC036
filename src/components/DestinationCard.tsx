import { Card, Rate } from 'antd';

export default ({ item }: any) => {
  return (
    <Card
      hoverable
      cover={<img src={item.image} style={{ height: 200, objectFit: 'cover' }} />}
    >
      <h3>{item.name}</h3>
      <p>{item.type}</p>
      <Rate disabled defaultValue={item.rating} />
      <p>{item.price} VND</p>
    </Card>
  );
};