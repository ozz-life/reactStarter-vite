import { Link } from "react-router-dom"

import Footer from '../Footer/Footer'
import Header from "../Header/Header"

const NotFound = () => {
    return (
        <>
            <Header />
            <h1>Error 404</h1>
            <h2>route not found :(</h2>
            <br />
            <Link to="welcome">Return to Index Page</Link>
            <Footer />
        </>
    )
}

export default NotFound