import { LoginDemo } from "../components/webDemo/loginDemo"
import { ReduxDemo } from "../components/webDemo/reduxDemo"
import { BrowserRouter } from "react-router-dom"

export const WebDemo = () => {
    return <section id="WebDemo">
        <div className="h-screen bg-slate-800">
            <div className="w-5/6 mx-auto">
                <ReduxDemo />
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <BrowserRouter><LoginDemo/></BrowserRouter>
                
            </div>
        </div>
    </section>
}