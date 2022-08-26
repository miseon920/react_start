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
      <img src="./img/mainvisual01.jpg" alt="" />
      <MainSlider />
    </>
  );
};
export default App;
