import { Link, Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Layout() {
  return (
    <div className="m-2">
      <Header />
      <nav className="m-2">
        <Link to="exp1">Example one (ApolloClient)</Link> |{" "}
        <Link to="redux-counter">Example two (Redux-Counter)</Link> |{" "}
        <Link to="exp2">Example (Error 404)</Link> |{" "}
        <Link to="adm">Dashboard Layout</Link>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
