import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import { TaskCounter } from "../components/TaskCounter/TaskCounter";
import { StatusFilter } from "../components/StatusFilter/StatusFilter";
import PageTitle from "../components/PageTitle/PageTitle";

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
      <PageTitle>Tasks</PageTitle>
      <TaskCounter />
      <PageTitle>Filter by status</PageTitle>
      <StatusFilter />
      <TaskForm />
      {error && <b>Ooops... something went wrong</b>}
      {isLoading && <b>Loading task...</b>}
      <TaskList />
    </>
  );
}
