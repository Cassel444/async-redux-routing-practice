// import { StatusFilter } from "../StatusFilter/StatusFilter";
// import { TaskCounter } from "../TaskCounter/TaskCounter";
// import css from "./AppBar.module.css";

// export const AppBar = () => {
//   return (
//     <header className={css.wrapper}>
//       <section className={css.section}>
//         <h2 className={css.title}>Tasks</h2>
//         <TaskCounter />
//       </section>
//       <section className={css.section}>
//         <h2 className={css.title}>Filter by status</h2>
//         <StatusFilter />
//       </section>
//     </header>
//   );
// };
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
