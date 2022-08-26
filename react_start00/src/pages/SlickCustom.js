import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

/**
 *
 *
 */
const SlickCustom = () => {
  const SlideEle = [
    {
      id: 1,
      h2: "01.JEWELLERY COLLECTION",
      p: "모던하면서도 클래식한 디자인들을 완벽하게 표현 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.",
    },
    {
      id: 2,
      h2: "02.JEWELLERY COLLECTION",
      p: "모던하면서도 클래식한 디자인들을 완벽하게 표현 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.",
    },
    {
      id: 3,
      h2: "03.JEWELLERY COLLECTION",
      p: "모던하면서도 클래식한 디자인들을 완벽하게 표현 그라프 하우스의 시그너쳐 컬렉션은 다양한 컷, 스톤 그리고 색상들을 멋진 조합으로 선사합니다.",
    },
  ];

  const S1 = useRef();
  const [num, setNum] = useState();

  //로드 후 최초 실행 - useEffct / useState 초기값을 0으로 - render와 update 가 한번 실행하게 할때
  useEffect(() => {
    //setTimeOut 등등, 초기값 세팅이라고 보면됨
    setNum(0);
  }, []); //[]은 의존성배열 / 안쓰면 업데이트할떄마다 계속진행하므로 [변수]를 쓰면 변수가 바뀔때마다 실행함
  const set = {
    arrows: false,
    autoplay: true,
    afterChange: (idx) => {
      //인덱스 받아오기! / 리액트는 매개변수가 하나임
      //console.log(idx); 값이 바뀔때마다 받아와야하므로 state
      setNum(idx);
    },
  };
  //slick - slickGoTo, index
  return (
    <>
      <Slider ref={S1} {...set} className="slick_s">
        {/*컴포넌트를 직접 제어하기위해서 이름을 붙임, ref={S1} */}
        {/* <figure>01</figure>
        <figure>02</figure>
        <figure>03</figure> */}
        {/*배열로 넣기 */}
        {SlideEle.map((item, idx) => (
          <figure
            key={item.id}
            className={`item item0${idx + 1} ${idx == num ? "on" : ""}`}
          >
            {item.id}
            <div className="slogan">
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
              <a href="#!">more</a>
            </div>
            {/* <Link to=></Link> */}
          </figure>
          //key={item.id} 은 map의 매개변수인 idx로 쓸수 있으나 성능저하 및 데이터의 문제가 있으므로 배열의 id로 준다
        ))}
      </Slider>
      {/*번호받기 */}
      <div className="num">
        {num + 1} / {SlideEle.length}
      </div>
      <div className="slideArrow">
        {/*S1.current = Slider */}
        <i className="xi-arrow-left" onClick={() => S1.current.slickPrev()}></i>
        <i
          className="xi-arrow-right"
          onClick={() => S1.current.slickNext()}
        ></i>
      </div>

      <ul className="slideDot">
        {SlideEle.map((dots, idx) => (
          <li key={dots.id} className={idx == num ? "on" : ""}>
            <a
              href=""
              onClick={(e) => {
                S1.current.slickGoTo(idx);
                e.preventDefault();
              }}
            >
              {dots.id}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
export default SlickCustom;
