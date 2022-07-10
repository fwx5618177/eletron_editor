import { useRef } from 'react';
import { marked } from 'marked';
import { Input } from 'antd';
import './text.css';

const { TextArea } = Input;

const TextEditor = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const showRef = useRef<HTMLDivElement>(null);

  const handleTransformData = (event) => {
    const { value } = event.target;
    // console.log(value, marked.parse(value), showRef.current);

    (showRef.current as HTMLDivElement).innerHTML = marked.parse(value);
  };

  return (
    <>
      <h3>字数统计</h3>
      <div className="text_editor">
        {/* <textarea name="text" className="text_textarea" /> */}
        <TextArea
          className="text_textarea"
          allowClear
          showCount
          placeholder="请输入内容"
          ref={inputRef}
          onChange={handleTransformData}
        />
        <div ref={showRef} className="text_performance" />
      </div>
    </>
  );
};

export default TextEditor;
