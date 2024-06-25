import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import { TaskCounter } from "../components/TaskCounter/TaskCounter";
import { StatusFilter } from "../components/StatusFilter/StatusFilter";

import { fetchTasks } from "../redux/tasks/operations";
import { selectError, selectIsLoading } from "../redux/filter/selectors";

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <header>
        <section>
          <h2>Tasks</h2>
          <TaskCounter />
        </section>
        <section>
          <h2>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
      <TaskForm />
      {error && <b>Ooops... something went wrong</b>}
      {isLoading && <b>Loading task...</b>}
      <TaskList />
    </>
  );
}
