import { useEffect, useState } from "react"
import { LoginDemo } from "../components/webDemo/loginDemo"
import { ReduxDemo } from "../components/webDemo/reduxDemo"
import { BrowserRouter } from "react-router-dom"
import { baseURL } from "../constants"

export const WebDemo = () => {
    const [isFetching,setIsFetching] = useState(true)
    const [message,setMessage] = useState('Connecting to the server')
    useEffect(()=>{
        fetch(baseURL,{
            headers:{
                "Content-type":"application/json"
            },
            method:"GET"
        }).then(()=>{
            setIsFetching(false)
            setMessage("Server is now online")
        }).catch(()=>{
            setIsFetching(true)
            setMessage("Unable to reach the server")
        })
    })
    return <section id="WebDemo">
        <div style={{ height: '100rem' }} className="bg-slate-800">
            <div className="w-5/6 mx-auto">
                <ReduxDemo />
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <BrowserRouter>
                    <h1 className="text-3xl mb-6"><strong>Stack demo</strong></h1>
                    <p className="mb-6">
                        Down here is a demo of React, Nestjs and MongoDB;
                        <br />The main functionalities of this site is authorization and authentication.
                    </p>
                    <div>
                        <h1 className="text-xl mb-3">Connection state: </h1>
                        {isFetching 
                            ? <div><h1 className="text-xl mb-6 text-yellow-400 inline">{message}</h1>
                            <div></div><span className="material-symbols-outlined animate-spin">
                            progress_activity
                            </span></div>
                            : <div><h1 className="text-xl mb-3 text-green-500">{message}</h1></div>
                        }
                    </div>
                    {!isFetching && <LoginDemo />}
                </BrowserRouter>
            </div>
        </div>
    </section>
}