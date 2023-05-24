import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { Button, Form } from 'antd';
import TextEditor from '../components/TextEditor/TextEditor';
import { UnprivilegedEditor } from 'react-quill';
import HTMLReactParser from 'html-react-parser';

const PreviewPDF = dynamic(() => import("../components/Pdf/Preview"), {
  ssr: false,
});


export default function MyApp() {
  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'John Doe',
    profession: 'Junior Developer',
    profileImageURL: 'https://i.imgur.com/f6L6Y57.png',
    display: true,
    about: 'About...',
  })

  const [client, setClient] = useState(false)

  const [form] = Form.useForm();

  const handleChangeValues = (value: string, editor: UnprivilegedEditor) => {
    console.log(value);
    // setProfile()
    // console.log(editor.getHTML());
    // setProfile(data);
  }

  const onSubmit = (values: any) => {
    setProfile({
      ...profile,
      ...form.getFieldsValue()
    })
  }

  const handleChange = (name: string, value: string) => {
    setProfile({ ...profile, [name]: value })
  }

  useEffect(() => {
    setClient(true);
    form.setFieldsValue(profile);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
    }}>
      {/* <div style={{ width: '50%' }}>
        <div>
          <label>Name</label>

          <input
            name='name'
            defaultValue={profile.name}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Profession</label>
          <input
            name='profession'
            defaultValue={profile.profession}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>ImageURL</label>
          <input
            name='profileImageURL'
            defaultValue={profile.profileImageURL}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>About</label>
          <input
            name='about'
            defaultValue={profile.about}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
      </div> */}
      <Form
        layout="horizontal"
        form={form}
        onFinish={onSubmit}
        style={{ marginTop: '100px', width: '50%', padding: '20px' }}
      >
        <Form.Item
          name="name"
          label="Name"
        >
          <TextEditor
            editorId={1}
            value={profile.name || ''}
            placeholder='Enter name'
            onChange={handleChangeValues}
          />
        </Form.Item>
        <Form.Item
          name="profession"
          label="Profession"
        >
          <TextEditor
            editorId={2}
            value={profile.profession || ''}
            placeholder='Enter profession'
            onChange={handleChangeValues}
          />
        </Form.Item>
        <Form.Item
          name="profileImageURL"
          label="Image URL"
        >
          <TextEditor
            editorId={3}
            value={profile.profileImageURL || ''}
            placeholder='Enter url'
            onChange={handleChangeValues}
          />
        </Form.Item>
        <Form.Item
          name="about"
          label="About"
        >
          <TextEditor
            editorId={4}
            value={profile.about || ''}
            placeholder='Enter about'
            onChange={handleChangeValues}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
        {HTMLReactParser(profile.name)}
      </Form>
      <PreviewPDF profile={profile} />
    </div>
  )
}