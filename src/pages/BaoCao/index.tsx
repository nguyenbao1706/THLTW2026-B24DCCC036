import { useEffect, useState } from 'react';
import { getData } from '@/utils/storage';

export default () => {
  const [stats, setStats] = useState<any>({});

  useEffect(() => {
    const clb = getData('clb');
    const dk = getData('dangky');

    setStats({
      clb: clb.length,
      pending: dk.filter((x: any) => x.status === 'Pending').length,
      approved: dk.filter((x: any) => x.status === 'Approved').length,
      rejected: dk.filter((x: any) => x.status === 'Rejected').length,
    });
  }, []);

  return (
    <div>
      <h3>CLB: {stats.clb}</h3>
      <h3>Pending: {stats.pending}</h3>
      <h3>Approved: {stats.approved}</h3>
      <h3>Rejected: {stats.rejected}</h3>
    </div>
  );
};