import { Button, Card, InputNumber, message } from 'antd';
import { useState } from 'react';

export default () => {
  const [de, setDe] = useState(2);
  const [trung, setTrung] = useState(2);
  const [kho, setKho] = useState(1);
  const [result, setResult] = useState<any[]>([]);

  const create = () => {
  const data = JSON.parse(localStorage.getItem('cau_hoi') || '[]');

  const pick = (lvl: string, num: number) => {
    return data
      .filter((q: any) => q.do_kho === lvl)
      .sort(() => 0.5 - Math.random())
      .slice(0, num);
  };

  const rs = [
    ...pick('de', de),
    ...pick('trung', trung),
    ...pick('kho', kho),
  ];

  setResult(rs);
  message.success('Tạo đề thành công');
};

  
  return (
    <Card title="Tạo đề thi">
      Dễ: <InputNumber value={de} onChange={(v) => setDe(v || 0)} /><br />
      Trung: <InputNumber value={trung} onChange={(v) => setTrung(v || 0)} /><br />
      Khó: <InputNumber value={kho} onChange={(v) => setKho(v || 0)} /><br /><br />

      <Button type="primary" onClick={create}>Tạo đề</Button>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </Card>
  );
};