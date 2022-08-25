import { useRef, useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import css from "./TopBanner2.module.css";

const TopBanner = () => {
  //1. 아이콘을 클릭한다.
  //2. 아이콘을 클릭하면 TopBanner에 class를 "on"을 붙인다. / 뗀다.
  //3. 변수를 만들어서 true / false 되는 스위치를 만들고
  //4. true / false 값에 따라서 class를 "on"을 붙인다. / 뗀다.

  const [toggle, setToggle] = useState(false);
  const style = {
    fontSize: "50px",
    color: "pink",
  };
  return (
    <>
      <div className={`TopBanner ${toggle ? "on" : ""}`}>
        <h2>Lorem ipsum dolor sit. {toggle ? "on" : ""}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          <br />
          Minima rem odit deleniti eum ullam.
        </p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          more
        </a>
      </div>
      <span
        onClick={() => {
          setToggle(!toggle);
        }}
        className={`btn ${toggle ? "on" : ""}`}
      >
        <BsHandThumbsUp />
      </span>
      <div style={style}>style test</div>
      <div className={`${css.hi}`} data-toggle={`${toggle ? "on" : ""}`}>
        style test222
      </div>
      {/* ${css.test} ${css.test}  */}
      {/* import css from "./TopBanner.module.css";에서 css라고 붙인 css이름.뒤에 원하는 클래스명 */}
    </>
  );
};

export default TopBanner;
/*

#리액트 아이콘
https://react-icons.github.io/react-icons

-모두 받아오면 용량에 문제가 되므로 웹팩에서 빌드해서 사용한다!

*/
