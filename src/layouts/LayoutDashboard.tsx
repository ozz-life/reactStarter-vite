import {
    Link,
    Outlet
} from "react-router-dom"
import MyContext from "../contexts/myContext"
import { useContext } from 'react'

import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header"

function Layout() {
    const {user}: any = useContext(MyContext)

    return (
        <div>
            <Header />
            <h4>Welcome to Dashboard {user.name}!</h4>
            <br />
            <nav>
                <Link to="exp-one">Example one</Link> | {" "}
                <Link to="user/edit">Edit name</Link> | {" "}
                <Link to="/">Home</Link>
            </nav>
            <hr />
            <main>
                <Outlet />
            </main>
            <br />
            <Footer />
        </div>
    )
}

export default Layout
