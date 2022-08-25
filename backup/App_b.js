// function App() {
//   return <div>001</div>;
// }
/*const App = () => {
  // const Home = () => {
  //   return <div>007</div>;
  // };
  // const a = "A";
  return (
    // <div>
    //   {a}a
    //   <Home />
    // </div>
    <>hi</>
  );
};*/

import { useRef, useState } from "react";
import "./basic.css";

const App = () => {
  //let num = 1;
  const [counter, setcounter] = useState(0);
  const [toggle, settoggle] = useState(true);
  //const link = useRef(null);
  const link = useRef(1);
  //console.log(link);
  const Counter = () => {
    setcounter(counter + 1);
    console.log(toggle);
    settoggle(!toggle);
    // link.current = link.current + 1;
    // console.log(link.current);
  };
  const Test = () => {
    return <div>hellow</div>;
  };
  return (
    <>
      {/* {num} */}
      {/* <div ref={link}>link</div> */}
      <section className={toggle ? "" : "on"}>
        {toggle ? `loading ...` : <Test />}
      </section>
      {/* 상태값에 따라 붙이기 */}
      클릭 수 : {counter}
      <button onClick={Counter}>click</button>
    </>
  );
};

export default App;
/*

React에서 useRef를 사용하는 경우는 다음과 같다.
useRef는 리렌더링 하지 않는다. 컴포넌트의 속성만 조회&수정한다.

#Ref를 사용해야 할 때
Ref의 바람직한 사용 사례는 다음과 같습니다.

-포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
-애니메이션을 직접적으로 실행시킬 때.
-서드 파티 DOM 라이브러리를 React와 같이 사용할 때.

///////
1. 컴포넌트에 focus를 위치시킬 필요가 있는 경우. //nameInput.current.focus();
2. 속성 값을 초기화(clear)할 필요가 있는 경우.
3.useRef로 컴포넌트 안의 변수 관리하기
useRef를 활용한 변수는 아래와 같은 곳에 쓰인다.
- setTimeout, setInterval을 통해 만들어진 id
- scroll 위치
- 배열에 새 항목을 추가할 때 필요한 고유값 key
/////

선언적으로 해결될 수 있는 문제에서는 ref 사용을 지양하세요.
예를 들어, Dialog 컴포넌트에서 open()과 close() 메서드를 두는 대신, isOpen이라는 prop을 넘겨주세요.

https://yoonjong-park.tistory.com/entry/React-useRef-%EB%8A%94-%EC%96%B8%EC%A0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%EA%B0%80

state - 변수에 담아서 값                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       전달
props - 값전달
*/
