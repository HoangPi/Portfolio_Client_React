import { LoginDemo } from "../components/webDemo/loginDemo"
import { ReduxDemo } from "../components/webDemo/reduxDemo"
import { BrowserRouter } from "react-router-dom"

export const WebDemo = () => {
    return <section id="WebDemo">
        <div style={{height:'100rem'}} className="bg-slate-800">
            <div className="w-5/6 mx-auto">
                <ReduxDemo />
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <BrowserRouter>
                <h1 className="text-3xl mb-6"><strong>Stack demo</strong></h1>
                <p className="mb-6">
                    Down here is a demo of React, Nestjs and MongoDB;
                    <br />The main functionalities of this site is authorization and authentication.
                </p>
                <LoginDemo/>
                </BrowserRouter>
            </div>
        </div>
    </section>
}