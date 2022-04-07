import { useState } from 'react'
import LayoutHome from './layouts/LayoutHome'
import LayoutDashboard from './layouts/LayoutDashboard'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Example1 from './components/Example1/Example1'
import Welcome from './components/Welcome/Welcome'
import NotFound from './components/NotFound/NotFound'
import MyContext from './contexts/myContext'
import EditUser from './components/EditUser/EditUser'

import { Counter } from './redux/features/counter/Counter';

type User = {
    name: string,
    password: string
}

function app() {
    const [user, setUser] = useState<User>({name: 'Stanislav', 'password': '123'})

    return (
        <MyContext.Provider value={{ user, setUser }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutHome />} >
                        <Route index element={<Welcome />} />
                        <Route path="welcome" element={<Welcome />}></Route>
                        <Route path="exp1" element={<Example1 />}></Route>
                        <Route path="redux-counter" element={<Counter />}></Route>
                    </Route>
                    <Route path="adm" element={<LayoutDashboard />} >
                        <Route index element={<Welcome />} />
                        <Route path="exp-one" element={<Example1 />}></Route>
                        <Route path="user/edit" element={<EditUser />}></Route>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </MyContext.Provider>
    )
}

export default app