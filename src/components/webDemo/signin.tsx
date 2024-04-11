import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { useAppDispatch } from "../../store/hook"
import { saveToken } from "../../store/tokenSlice"
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../constants"

export const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false)
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleUsernameOnChange = (value: string) =>{
        setUsername(value)
        if(value!==''){
            setIsUsernameEmpty(false)
        }
    }
    const handlePasswordOnChange = (value: string) =>{
        setPassword(value)
        if(value!==''){
            setIsPasswordEmpty(false)
        }
    }
    const handleSignIn = async () => {
        if(username.trim() ==='' || password.trim()===''){
            setIsPasswordEmpty(password.trim()==='')
            setIsUsernameEmpty(username.trim()==='')
            return
        }
        const res = await fetch(`${baseURL}/user/login`,{
            headers:{
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({username, password})
        })
        const resData = await res.json()
        console.log(resData)
        if(!resData.access_token){
            toast("Incorrect credential information")
            return
        }
        dispatch(saveToken(resData.access_token))
        navigate('/')
        // console.log(resData)
    }
    useEffect(()=>{
        // dispatch(deleteToken())
    },[])
    return <div>
        <div className="w-2/3 mx-auto pt-6 pb-6">
            <h1 className="text-center mb-5 text-1xl"><strong>Sign in to your account</strong></h1>
            <div className="w-2/3 mx-auto">
                <label className="block mb-2" htmlFor="usernameDemo">Username</label>
                <input onKeyDown={(ev)=>{if(ev.key==='Enter') handleSignIn()}} onChange={(ev) => handleUsernameOnChange(ev.target.value)} value={username} className="p-3 block w-full  bg-slate-700 border-2 border-slate-400 rounded-sm mb-1" type="text" name="" id="usernameDemo" />
                <p style={{visibility: isUsernameEmpty ? 'visible' : 'hidden'}} className="text-red-500 mb-5">This field is required!</p>
            </div>
            <div className="w-2/3 mx-auto">
                <label className="block mb-2" htmlFor="passwordDemo">Password</label>
                <input onKeyDown={(ev)=>{if(ev.key==='Enter') handleSignIn()}} onChange={(ev) => handlePasswordOnChange(ev.target.value)} value={password} className="p-3 block w-full mb-1 bg-slate-700 border-2 border-slate-400 rounded-sm" type="password" name="" id="passwordDemo" />
                <p style={{visibility: isPasswordEmpty ? 'visible' : 'hidden'}} className="text-red-500 mb-5">This field is required!</p>
            </div>
            <div className="w-2/3 mx-auto">
                <input type="checkbox" name="" id="rememberMe" />
                <label htmlFor="rememberMe">   Remember me</label>
            </div>
            <div className="w-2/3 mx-auto mt-5">
                <button onClick={handleSignIn} className="bg-sky-600 hover:bg-sky-500 pe-auto w-full h-12">Sign in</button>
            </div>
            <div className="w-2/3 mx-auto mt-5 grid grid-cols-4 text-sm">
                <div className="col-span-3">Does not have an account yet?</div>
                <div className="text-end">Sign up <strong> <Link to='/signup' className="hover:text-sky-600 hover:underline">here</Link></strong></div>
            </div>
        </div>
        <ToastContainer />
    </div>
}