import { useRef, useState } from 'react';
import { marked } from 'marked';
import { Input, Row, Col } from 'antd';
import { TwitterPicker } from 'react-color';
import './text.css';

const { TextArea } = Input;

const TextEditor = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false);
  const [displayFontColorPicker, setDisplayFontColorPicker] =
    useState<boolean>(false);
  const [showColor, setShowColor] = useState<{
    r: string;
    g: string;
    b: string;
    a: string;
  }>({
    r: '238',
    g: '136',
    b: '238',
    a: '1',
  });
  const [fontColor, setFontColor] = useState<{
    r: string;
    g: string;
    b: string;
    a: string;
  }>({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const showRef = useRef<HTMLDivElement>(null);

  const handleTransformData = (event) => {
    const { value } = event.target;
    // console.log(value, marked.parse(value), showRef.current);

    (showRef.current as HTMLDivElement).innerHTML = marked.parse(value);
  };

  const changeBgColor = (
    color: {
      rgb: {
        r: string;
        g: string;
        b: string;
        a: string;
      };
    },
    type: 'background-color' | 'color'
  ) => {
    const textarea: HTMLCollectionOf<HTMLTextAreaElement> =
      document.getElementsByTagName('textarea');

    if (textarea && textarea.length) {
      // (textarea[0] as HTMLTextAreaElement).style[
      //   type
      // ] = ;
      (textarea[0] as HTMLTextAreaElement).style.setProperty(
        type,
        `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
        'important'
      );
    }
  };

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChangeColor = (color: {
    rgb: {
      r: string;
      g: string;
      b: string;
      a: string;
    };
  }) => {
    setShowColor(color.rgb);
    changeBgColor(color, 'background-color');
  };

  return (
    <>
      <header>
        <h3>字数统计</h3>
      </header>

      <div className="text_color_select">
        <Row gutter={12} justify="start" align="middle">
          <Col span={6}>
            <span>选择文本框背景颜色</span>
          </Col>

          <Col span={6}>
            <div
              className="text_color_selector_swatch"
              aria-hidden
              onClick={handleClick}
            >
              <div
                className="text_color_selector_color"
                style={{
                  background: `rgba(${showColor.r}, ${showColor.g}, ${showColor.b}, ${showColor.a})`,
                }}
              />
            </div>
            {displayColorPicker ? (
              <div className="text_color_selector_popover">
                <div
                  className="text_color_selector_cover"
                  onClick={handleClick}
                  aria-hidden
                />
                <TwitterPicker color={showColor} onChange={handleChangeColor} />
              </div>
            ) : null}
          </Col>
        </Row>
        <Row gutter={12} justify="start" align="middle">
          <Col span={6}>
            <span>选择文字颜色</span>
          </Col>

          <Col span={6}>
            <div
              className="text_color_selector_swatch"
              aria-hidden
              onClick={() => setDisplayFontColorPicker(!displayFontColorPicker)}
            >
              <div
                className="text_color_selector_color"
                style={{
                  background: `rgba(${fontColor.r}, ${fontColor.g}, ${fontColor.b}, ${fontColor.a})`,
                }}
              />
            </div>
            {displayFontColorPicker ? (
              <div className="text_color_selector_popover">
                <div
                  className="text_color_selector_cover"
                  onClick={() =>
                    setDisplayFontColorPicker(!displayFontColorPicker)
                  }
                  aria-hidden
                />
                <TwitterPicker
                  color={fontColor}
                  onChange={(color: {
                    rgb: {
                      r: string;
                      g: string;
                      b: string;
                      a: string;
                    };
                  }) => {
                    setFontColor(color.rgb);
                    changeBgColor(color, 'color');
                  }}
                />
              </div>
            ) : null}
          </Col>
        </Row>
      </div>

      <div className="text_editor">
        {/* <textarea name="text" className="text_textarea" /> */}
        <TextArea
          className="text_textarea"
          style={{
            backgroundColor: `rgba(${showColor.r}, ${showColor.g}, ${showColor.b}, ${showColor.a}) !important`,
          }}
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
