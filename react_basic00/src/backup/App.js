import { useState } from "react";
import Test from "./list";

// function App() {
//   return (
//     <>
//       <div>d</div>
//       <div>g</div>
//     </>
//   );
// }
// const Test = (props) => {
//   //console.log(props);
//   return (
//     <div>
//       <h2>my {props.list} list</h2>
//       {/* 값전달시 props - 객체로 전달 */}
//       <ul>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//       </ul>
//     </div>
//   );
// };
// const Test = (props) => {
//   //console.log(props);
//   //{ list, name }
//   return (
//     <div>
//       <h2>
//         my {props.list} {props.name} {props.age} list
//         {/* props?.list 있으면 써라! */}
//       </h2>
//       <ul>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//         <li>test</li>
//       </ul>
//     </div>
//   );
// };

const App = () => {
  const [num, setnum] = useState(1);
  const numberHandler = () => {
    setnum(num + 1);
  };
  return (
    <>
      <h1>{num}</h1>

      {/* <button onClick={numberHandler}>클릭해봐!</button> */}
      <Test list="고래" name="동그라미" age={21} onClick={numberHandler} />
      <Test list="고래2" name="동그라미3" age={22} />
    </>
  );
};
export default App;
