import { Outlet } from "react-router-dom";

import MainNav from "../components/MainNav";
import classes from "../pages/Root.module.css";

export default function RootLayout() {
  return (
    <>
      <MainNav />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
