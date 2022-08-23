import Some from "./some";

const Test = ({ list, age, name, onClick }) => {
  //console.log(props);
  //{ list, name }
  return (
    <div>
      <button onClick={onClick}>온클릭을 props로?</button>
      <h2>
        my {list} {name} {age} list
        {/* props?.list 있으면 써라! */}
        <button
          onClick={function () {
            alert(list);
          }}
        >
          click
        </button>
      </h2>
      <Some list={list} />
      <ul>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
};

export default Test;
