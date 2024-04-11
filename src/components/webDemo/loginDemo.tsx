import { Route, Routes } from "react-router-dom"
import { SignIn } from "./signin"
import { SignUp } from "./signup"
import { useEffect } from "react"
import { PageNotFound } from "./pageNotFound"
import { NavBarDemo } from "./navBarDemo"
import { HomePage } from "./homePage"
import { AdminPage } from "./adminPage"

export const LoginDemo = () => {
    useEffect(() => {
    }, [])
    return <div className="bg-slate-700 grid grid-cols-12">
        {/* <BrowserRouter> */}
        <div className="col-span-2"><NavBarDemo/></div>
        <div className="col-span-10">
            <Routes>
                <Route path="*" element={<PageNotFound />} />
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </div>

        {/* </BrowserRouter> */}

    </div>
}