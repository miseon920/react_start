import { useState } from "react";

const TabContent = () => {
  return (
    <ul>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
      <li>Lorem ipsum dolor sit.</li>
    </ul>
  );
};

const TabData = [
  { id: 1, title: "menu01", content: <TabContent /> },
  { id: 2, title: "menu02", content: "content2" },
  { id: 3, title: "menu03", content: "content3" },
  { id: 4, title: "menu04", content: "content4" },
  { id: 5, title: "menu05", content: "content5" },
];

const Tab = () => {
  const [num, setnum] = useState(0);
  return (
    <>
      <ul>
        {TabData.map((el, idx) => (
          <li key={el.id} className={num == idx ? "on" : ""}>
            <a
              href=""
              onClick={(e) => {
                setnum(idx);
                //console.log(idx);
                e.preventDefault();
              }}
            >
              {el.title}
            </a>
          </li>
        ))}
      </ul>
      <div>{TabData[num].content}</div>
    </>
  );
};
export default Tab;
