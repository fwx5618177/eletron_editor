import { Input } from 'antd';
import './text.css';

const { TextArea } = Input;

const TextEditor = () => {
  return (
    <>
      <h3>字数统计</h3>
      <div className="text_editor">
        <textarea name="text" className="text_textarea" />
        {/* <TextArea
      className="text_textarea"
      allowClear
      showCount
      // placeholder="请输入文章"
      // defaultValue="请输入文章"
    /> */}
        <div className="text_performance">1</div>
      </div>
    </>
  );
};

export default TextEditor;
