import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../redux/actions";
import { listTodo, search, todoListFilter } from "../../redux/selects";
export default function TodoList() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const todoList = useSelector(todoListFilter);
  // const filterSearch = useSelector(search);
  const [textTodo, setTextTodo] = useState("");
  const [prioriry, setPriority] = useState("Medium");
  const handleChangePriority = (e) => {
    setPriority(e);
  };

  const handleChangeText = (e) => {
    setTextTodo(e.target.value);
  };
  const handleAddTodo = () => {
    const newTodo = {
      id: uuidv4(),
      name: textTodo,
      prioriry: prioriry,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    setTextTodo("");
    setPriority("Medium");
    inputRef.current.focus();
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList &&
          todoList.length > 0 &&
          todoList.map((todo, index) => (
            <Todo
              key={index}
              id={todo.id}
              name={todo.name}
              prioriry={todo.prioriry}
              completed={todo.completed}
            />
          ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input ref={inputRef} value={textTodo} onChange={handleChangeText} />
          <Select
            defaultValue="Medium"
            value={prioriry}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
