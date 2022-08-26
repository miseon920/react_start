import Tab from "./pages/Tab01";
import MainVisual from "./pages/MainVisual";
import "./basic.css";
import SyncSlick from "./pages/SyncSlick";
import MainSlider from "./pages/SlickCustom";

// const App = () => {
//   return (
//     <>
//       <h2>기본슬릭</h2>
//       <MainVisual />
//       <hr />
//       <h2>슬릭두개연결</h2>
//       <SyncSlick />
//       <hr />
//       <h2>슬릭최종</h2>
//       <SlickCustom />
//     </>
//   );
// };

const App = () => {
  return (
    <>
      {/* 
        <img src="./img/mainvisual01.jpg" alt="" /> 
        img는 public에 넣어야함!
      */}
      <section className="visual">
        <MainSlider />
      </section>
    </>
  );
};
export default App;
/**
 * 절대경로 사용법
 * https://velog.io/@rimo09/React%EC%97%90%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B2%BD%EB%A1%9C-%EA%B9%94%EB%81%94%ED%9E%88-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
 * 
 * 내용인 즉 ,  public폴더의 절대경로를 이용하고 싶다면


html 에서는 %PUBLIC_URL% 

js 에서는 process.env.PUBLIC_URL 
 *
 */
