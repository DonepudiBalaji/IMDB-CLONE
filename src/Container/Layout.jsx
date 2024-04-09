import { Outlet } from "react-router";
import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
function Layout() {
    return ( <>
        <Header />
        <Navigation />
        <Outlet />
    </> );
}

export default Layout;