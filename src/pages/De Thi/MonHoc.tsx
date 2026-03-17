import { Table, Button, Modal, Form, Input } from 'antd';
import { useState, useEffect } from 'react';

const KEY = 'mon_hoc';

export default () => {
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

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
      <Button type="primary" onClick={()=>setOpen(true)}>Thêm</Button>

      <Table rowKey="id" dataSource={data} columns={[
        {title:'Mã',dataIndex:'ma'},
        {title:'Tên',dataIndex:'ten'},
        {title:'Tín chỉ',dataIndex:'tin'},
      ]}/>

      <Modal visible={open} onOk={add} onCancel={()=>setOpen(false)}>
        <Form form={form}>
          <Form.Item name="ma" label="Mã" rules={[{required:true}]}><Input/></Form.Item>
          <Form.Item name="ten" label="Tên" rules={[{required:true}]}><Input/></Form.Item>
          <Form.Item name="tin" label="Tín chỉ"><Input/></Form.Item>
        </Form>
      </Modal>
    </>
  );
};