import { useEffect, useState } from "react";
import ListTest from "./pages/ListTest";
//import TopBanner from "./pages/TopBanner2";
import TopBanner from "./pages/ListTest";

// const DATA = [
//   //실제로는 back에서 보내는 data
//   { id: 1, name: "mi_suuun", age: 31, sleep: true },
//   { id: 2, name: "김미선", age: 21, sleep: false },
//   { id: 3, name: "미선", age: 11, sleep: true },
//   { id: 4, name: "미써니", age: 1, sleep: true },
// ];
// //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// const List = () => {
//   return (
//     <ul>
//       {/* <li>{DATA[1].name}</li>
//       <li>{DATA[2].name}</li>
//       <li>{DATA[3].name}</li> */}
//       {/* map을 통하여 새로운 배열 생성 */}
//       {/* {DATA.map((it) => (
//         <li>{it.name}</li>
//       ))} */}
//       {/* {DATA[0].name}은 {DATA[0].age}살 {DATA[0].sleep && "자고잇음"}
//       {DATA[1].name}은 {DATA[1].age}살 {DATA[1].sleep && "자고잇음"}
//       {DATA[2].name}은 {DATA[2].age}살 {DATA[2].sleep && "자고잇음"} */}
//       {/* {DATA.map(function (it) { //function으로 적으면 return을 해줘야함
//         return it.name;
//       })} */}
//       {DATA.map((item, idx) => (
//         <li key={item.id}>
//           {idx + 1}번 {item.name}은 {item.age}살
//           {item.sleep ? "자고있음" : "안잠"}
//           {/* 렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용할 수 있다.
//               Key는 형제 사이에서만 고유한 값이어야 한다.
//           */}
//         </li>
//       ))
//         .slice(0, 2)
//         .reverse()}
//       {<pre>-----------------------------------------</pre>}
//     </ul>
//   );
// };

/*
  {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
} 
으로 가져오므로 json()으로 ""을 빼줘야함 - 문자열을 객체로 쓸수 있게 바꿈
  
*/

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);
  return (
    <>
      {data.map((it) => (
        <li key={it.id}>
          {it.id}
          {it.title}
        </li>
      ))}
      {/* <ListTest /> */}
      {/* <TopBanner /> */}
      {/* <List /> */}
      {/* <div className="test hi">main</div> */}
    </>
  );
};
export default App;
/*
for문과 foreach문의 차이
https://bum-developer.tistory.com/entry/JavaScript-for%EB%AC%B8%EA%B3%BC-forEach%EB%AC%B8-%EC%B0%A8%EC%9D%B4

#map과 filter의 차이
map() 은 새로운 배열을 반환한다.
filter() 는 조건에 부합하는 요소들을 모아 배열로 반환한다.
https://bigstar-vlog.tistory.com/49

#키값
https://ko.reactjs.org/docs/lists-and-keys.html

*/
/*
#가짜 api 연습
https://jsonplaceholder.typicode.com/

#패치함수
https://velog.io/@daybreak/React-Fetch%ED%95%A8%EC%88%98

https://studyandwrite.tistory.com/368

https://ko.reactjs.org/docs/hooks-effect.html

https://dream-frontend.tistory.com/383

https://goddino.tistory.com/96

https://intrepidgeeks.com/tutorial/call-api-with-react-fetch-eat-journal

#useEffect async, await 함수 사용법
https://velog.io/@he0_077/useEffect-%ED%9B%85%EC%97%90%EC%84%9C-async-await-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0



*/
