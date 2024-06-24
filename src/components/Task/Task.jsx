import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
    </div>
  );
};
