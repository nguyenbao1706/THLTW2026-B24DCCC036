import { Modal, Form, Input, DatePicker, Select } from 'antd';
import { saveTasks, getTasks } from '@/models/task';

export default ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then((v) => {
      const data = getTasks();

      const newData = [
        ...data,
        {
          id: Date.now(),
          ...v,
          status: 'todo',
        },
      ];

      saveTasks(newData);
      setOpen(false);
      form.resetFields();
    });
  };

  return (
    <Modal open={open} onOk={handleOk} onCancel={() => setOpen(false)}>
      <Form form={form}>
        <Form.Item name="title" rules={[{ required: true }]}>
          <Input placeholder="Tên task" />
        </Form.Item>

        <Form.Item name="deadline">
          <DatePicker />
        </Form.Item>

        <Form.Item name="priority">
          <Select
            options={[
              { value: 'high', label: 'Cao' },
              { value: 'medium', label: 'Trung bình' },
              { value: 'low', label: 'Thấp' },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};