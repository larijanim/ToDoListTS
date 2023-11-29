import { ChangeEvent, useState } from "react";
import { tasktype } from "./interface";

const ToDoList: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [list, setList] = useState<tasktype[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const handleAddClick = () => {
    setList([...list, { title, checked: false }]);
    setTitle("");
  };
  const handleDelete = (t: string) => {
    setList((preList) => {
      return preList.filter((item) => item.title !== t);
    });
  };
  const HandleCheckBox = (t: string, index: number) => {
    setList((preList) =>
      preList.map((item, idx) =>
        index === idx ? { title: t, checked: !item.checked } : item,
      ),
    );
  };
  return (
    <div className="parent">
      <input
        type="text"
        value={title}
        onChange={(e) => handleInputChange(e)}
        placeholder="addNew Task"
      ></input>
      <button onClick={() => handleAddClick()}>Add</button>
      <div className="wrapper">
      
          {list?.map((t, index) => {
            return (
              <div key={index} className='card'>
                <input
                  className="check"
                  type="checkbox"
                  checked={t.checked}
                  onChange={() => HandleCheckBox(t.title, index)}
                />{" "}
                <span
                  style={{ textDecoration: t.checked ? "underline red" : "" }}
                >
                  {t.title}
                </span>
                <button
                  className="button"
                  onClick={() => handleDelete(t.title)}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>

    </div>
  );
};
export default ToDoList;
