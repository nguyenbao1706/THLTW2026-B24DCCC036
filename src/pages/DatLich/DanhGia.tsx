import { Rate, Input, Button } from 'antd';
import { useState } from 'react';
import { getData, setData } from '../../utils/storage';

export default () => {
  const [rate, setRate] = useState(0);
  const [text, setText] = useState('');

  const save = () => {
    const data = getData('danhgia');
    data.push({ rate, text });
    setData('danhgia', data);
  };

  return (
    <>
      <Rate onChange={setRate} />
      <Input onChange={(e) => setText(e.target.value)} />
      <Button onClick={save}>Gửi</Button>
    </>
  );
};