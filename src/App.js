import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const addStyles = [
    {
      id: 1,
      value: "font-weight",
      defaultClass: "default"
    },
    {
      id: 2,
      value: "text-align",
      defaultClass: "default"
    },
    {
      id: 3,
      value: "color",
      defaultClass: "default"
    },
    {
      id: 4,
      value: "font-style",
      defaultClass: "default"
    },
    {
      id: 5,
      value: "text-decoration",
      defaultClass: "default"
    },
    {
      id: 6,
      value: "background-color",
      defaultClass: "default"
    },
    {
      id: 7,
      value: "line-height",
      defaultClass: "default"
    },
    {
      id: 8,
      value: "letter-spacing",
      defaultClass: "default"
    },
    {
      id: 9,
      value: "writing-mode",
      defaultClass: "default"
    },
    {
      id: 10,
      value: "link",
      defaultClass: "default"
    }
  ];

  //クラス付与用のstate
  const [AddClass01, setAddClass01] = useState(true);
  const [AddClass02, setAddClass02] = useState(true);
  const [AddClass03, setAddClass03] = useState(true);
  const [AddClass04, setAddClass04] = useState(true);
  const [AddClass05, setAddClass05] = useState(true);
  const [AddClass06, setAddClass06] = useState(true);
  const [AddClass07, setAddClass07] = useState(true);
  const [AddClass08, setAddClass08] = useState(true);
  const [AddClass09, setAddClass09] = useState(true);
  const [AddClass10, setAddClass10] = useState(true);

  // const handleMouseUp = () => {
  //   const select = window.getSelection().toString();
  //   // console.log(select);
  //   setSelectedText(select);
  //   console.log(select);
  // };

  //要素取得
  const eleRef = useRef(null);

  // const [selectedText, setSelectedText] = useState("");

  //ドラックした要素を保存するためのやつです。
  // この関数でドラックした要素のテキストを取得
  // const handleMouseUp = () => {
  //   const range = window.getSelection().getRangeAt(0);
  //   const span = document.createElement("span");
  //   span.textContent = window.getSelection().toString();
  //   span.classList.add("default");
  //   range.deleteContents();
  //   range.insertNode(span);

  //   console.log(span);

  //   setSelectedText(span);
  // };

  const addSpan = (e) => {
    const range = window.getSelection().getRangeAt(0);
    const span = document.createElement("span");
    span.textContent = window.getSelection().toString();
    // span.classList.add("default");
    range.deleteContents();
    range.insertNode(span);

    // 選択された範囲を取得
    if (e.currentTarget.id === "1") {
      setAddClass01(!AddClass01);
      if (AddClass01) {
        span.classList.add(`${addStyles[0].value}`);
      } else {
        span.classList.remove(`${addStyles[0].value}`);
      }
    }

    if (e.currentTarget.id === "2") {
      setAddClass02(!AddClass02);
      if (AddClass02) {
        span.classList.add(`${addStyles[1].value}`);
      } else {
        span.classList.remove(`${addStyles[1].value}`);
      }
    }

    if (e.currentTarget.id === "3") {
      setAddClass03(!AddClass03);
      if (AddClass03) {
        span.classList.add(`${addStyles[2].value}`);
      } else {
        span.classList.remove(`${addStyles[2].value}`);
      }
    }

    if (e.currentTarget.id === "4") {
      setAddClass04(!AddClass04);
      if (AddClass04) {
        span.classList.add(`${addStyles[3].value}`);
      } else {
        span.classList.remove(`${addStyles[3].value}`);
      }
    }

    if (e.currentTarget.id === "5") {
      setAddClass05(!AddClass05);
      if (AddClass05) {
        span.classList.add(`${addStyles[4].value}`);
      } else {
        span.classList.remove(`${addStyles[4].value}`);
      }
    }

    if (e.currentTarget.id === "6") {
      setAddClass06(!AddClass06);
      if (AddClass06) {
        span.classList.add(`${addStyles[5].value}`);
      } else {
        span.classList.remove(`${addStyles[5].value}`);
      }
    }

    if (e.currentTarget.id === "7") {
      setAddClass07(!AddClass07);
      if (AddClass07) {
        span.classList.add(`${addStyles[6].value}`);
      } else {
        span.classList.remove(`${addStyles[6].value}`);
      }
    }

    if (e.currentTarget.id === "8") {
      setAddClass08(!AddClass08);
      if (AddClass08) {
        span.classList.add(`${addStyles[7].value}`);
      } else {
        span.classList.remove(`${addStyles[7].value}`);
      }
    }

    if (e.currentTarget.id === "9") {
      setAddClass09(!AddClass09);
      if (AddClass09) {
        span.classList.add(`${addStyles[8].value}`);
      } else {
        span.classList.remove(`${addStyles[8].value}`);
      }
    }
    console.log(span);
    if (span.classList.contains("default")) {
      return;
    }
  };

  return (
    <>
      <div className="App" ref={eleRef}>
        {/* <p contentEditable="true">あいうえお</p> */}
        <p>ABCDE</p>
        {/* <span>カキクケコ</span> */}
      </div>
      {addStyles.map((item, i) => {
        return (
          <button
            key={item.id}
            // onClick={item.click}
            onClick={addSpan}
            id={item.id}
          >
            {item.value}
          </button>
        );
      })}
    </>
  );
}
