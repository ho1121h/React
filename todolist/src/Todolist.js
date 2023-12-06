import React,{useState} from 'react';
import './Todolist.css'; // CSS 파일을 import 합니다. 경로는 실제 파일 위치에 따라 다를 수 있습니다.

function Todolist() {
    const [Todolist, setTodolist] = useState([]);
    const [input, setInput]= useState('');

 // 입력한 값을 상태에 반영하는 함수
 const handleChange = (e) => {
    setInput(e.target.value);
  };

  // 입력한 값을 todolist에 추가하는 함수
  const handleClick = () => {
    // 입력한 값이 비어있으면 추가하지 않음
    if (input.trim() === '') return;
    // todolist에 입력한 값을 추가하고, input을 초기화함
    setTodolist([...Todolist, input]);
    setInput('');
  };

  // todolist에서 해당 항목을 제거하는 함수
  const handleDelete = (index) => {
    // todolist에서 index번째 항목을 제외한 나머지 항목들로 새로운 배열을 만듦
    const newTodolist = Todolist.filter((item, i) => i !== index);
    // todolist를 새로운 배열로 변경함
    setTodolist(newTodolist);
  };

  return (
    <div className="todolist">
      <h1 className="title">Todolist</h1>
      <input className="input" type="text" value={input} onChange={handleChange} />
      <button className="add-button" onClick={handleClick}>Add</button>
      <ul className="list">
        {Todolist.map((item, index) => (
          <li className="item" key={index}>
            {item}
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
