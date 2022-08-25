import { useRef, useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import css from "./TopBanner2.module.css";

const TopBanner = () => {
  //1. 아이콘을 클릭한다.
  //2. 아이콘을 클릭하면 TopBanner에 class를 "on"을 붙인다. / 뗀다.
  //3. 변수를 만들어서 true / false 되는 스위치를 만들고
  //4. true / false 값에 따라서 class를 "on"을 붙인다. / 뗀다.

  const TopSpan = useRef(null);
  const [toggle, setToggle] = useState(false);
  const style = {
    fontSize: "50px",
    color: "pink",
  };
  return (
    <>
      <div className="TopBanner" ref={TopSpan}>
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
        onClick={(e) => {
          e.currentTarget.classList.toggle("on");
          TopSpan.current.classList.toggle("on");
        }}
        className="btn"
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


#useref
https://react.vlpt.us/basic/10-useRef.html

useRef
javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
특정 DOM에 접근할 때 사용한다.
외부 라ㅣ브러리 사용할때 유용하다.
원하는 위치에 ref={} 의 형태로 작성하면 된다.
포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.
const nameInput = useRef();

const onClick = () => {
    nameInput.current.focus();
}

return(
    <input ref={nameInput} />
    <button onClick={onClick}>클릭</button>
)

*/
