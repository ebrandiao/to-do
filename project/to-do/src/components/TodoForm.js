import React, { useState, useEffect } from "react";
import axios from "axios";
import Confirmation from "./Confirmation";
import { useNavigate } from "react-router";

function TodoForm() {
  const [title, setTitle] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [alert, setAlert] = useState("");

  const navigate = useNavigate();

  const createTodo = async (e) => {
    e.preventDefault();

    if (title === "") {
      setAlert("O nome do título não pode estar vazio");
      setTimeout(() => {
        setAlert("");
      }, 1000);
    } else {
      const newTodo = {
        title
      };
      await axios.post("https://lab-to-do-api.herokuapp.com/todo/", newTodo);
      setTitle("");
      setConfirmation(true);
    }
  };
  const accept = () => {
    setConfirmation(false);
  };
  const reject = () => {
    navigate("/todolist");
  };
  return (
    <div>
      <div>Teste, estou na pagina todoform</div>

      <Confirmation accept={accept} reject={reject}></Confirmation>

      <form onSubmit={createTodo}>
        <input
          type="text"
          placeholder="Description of to-do"
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
        />

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
}
export default TodoForm;
