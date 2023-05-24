import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from "./TextEditor.module.scss";
import { ReactQuillProps } from 'react-quill';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})


const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
];

interface Props extends ReactQuillProps {
  editorId: number;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: any;
  visible?: boolean;
};

const TextEditor: React.FC<Props> = ({ editorId, value, defaultValue, onChange, placeholder }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const ref = useRef<any>();

  const _handleClickOutside = (event: any) => {
    const toolbarElement = document.querySelector(`.text-editor--${editorId} .ql-toolbar`);
    const editorElement = document.querySelector(`.text-editor--${editorId} .ql-editor`);

    if (toolbarElement?.contains(event.target) || editorElement?.contains(event.target)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", _handleClickOutside, true);
    return () => {
      document.removeEventListener("click", _handleClickOutside, true);
    };
  }, [visible]);

  return (
    <div ref={ref} className={`${styles[`text-editor`]} ${visible ? styles[`text-editor--visible`] : ``} text-editor--${editorId}`}>
      <QuillNoSSRWrapper
        theme="snow"
        value={value || ''}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextEditor;