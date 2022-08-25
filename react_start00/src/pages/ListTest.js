const DATA = [
  //실제로는 back에서 보내는 data
  { id: 1, name: "mi_suuun", age: 31, sleep: true },
  { id: 2, name: "김미선", age: 21, sleep: false },
  { id: 3, name: "미선", age: 11, sleep: true },
  { id: 4, name: "미써니", age: 1, sleep: true },
];
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

const ListTest = () => {
  return (
    <ul>
      {DATA.map((item, idx) => (
        <li key={item.id}>
          {idx + 1}번 {item.name}은 {item.age}살
          {item.sleep ? "자고있음" : "안잠"}
          {/* 렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용할 수 있다. 
              Key는 형제 사이에서만 고유한 값이어야 한다.
          */}
        </li>
      ))
        .slice(0, 2)
        .reverse()}
    </ul>
  );
};

export default ListTest;
