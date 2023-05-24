import React, { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { Button, Form } from 'antd';
import TextEditor from '../components/TextEditor/TextEditor';

const Home = () => {
  const [value, setValue] = useState({
    name: '',
    email: ''
  });
  const [form] = Form.useForm();

  const handleChangeValues = (data: any) => {
    setValue(data);
  }

  const onSubmit = (values: any) => {
    // logic to submit form to server
    console.log(values);
    // form.resetFields();
  }

  return (
    <>
      <Form layout="horizontal" form={form} onFinish={onSubmit} style={{ marginTop: '100px' }}>
        <Form.Item
          name="name"
          label="name"
        >
          <TextEditor
            editorId={1}
            value={value.name || ''}
            placeholder='Enter name'
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
        >
          <TextEditor
            editorId={2}
            value={value.email || ''}
            placeholder='Enter email'
            onChange={handleChangeValues}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Home
