import { Table, Button, Modal, Form, Input, Select } from 'antd';
import { useState, useEffect } from 'react';

const KEY = 'cau_hoi';

export default () => {
  const [data,setData]=useState<any[]>([]);
  const [open,setOpen]=useState(false);
  const [form]=Form.useForm();

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem(KEY)||'[]'));
  },[]);

  const save=(d:any[])=>{
    setData(d);
    localStorage.setItem(KEY,JSON.stringify(d));
  };

  const add=()=>{
    form.validateFields().then(v=>{
      save([...data,{id:Date.now(),...v}]);
      setOpen(false);
      form.resetFields();
    });
  };

  return (
    <>
      <Button type="primary" onClick={()=>setOpen(true)}>Thêm câu hỏi</Button>

      <Table rowKey="id" dataSource={data} columns={[
        {title:'Nội dung',dataIndex:'content'},
        {title:'Độ khó',dataIndex:'level'},
      ]}/>

      <Modal visible={open} onOk={add} onCancel={()=>setOpen(false)}>
        <Form form={form}>
          <Form.Item name="content" label="Câu hỏi" rules={[{required:true}]}>
            <Input/>
          </Form.Item>

          <Form.Item name="level" label="Độ khó">
            <Select>
              <Select.Option value="de">Dễ</Select.Option>
              <Select.Option value="trung">Trung bình</Select.Option>
              <Select.Option value="kho">Khó</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};