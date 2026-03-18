import { getData } from '../../utils/storage';

export default () => {
  const lich = getData('lichhen');

  const total = lich.length;

  return (
    <div>
      <h3>Tổng lịch hẹn: {total}</h3>
    </div>
  );
};