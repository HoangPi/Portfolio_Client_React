import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../constants";

export const SignUp = () => {
    const [fullname, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const navigate = useNavigate()
    const handleSignUp = async () => {
        if(fullname.trim() === '' || username.trim() === '' || password1.trim() === '' || password2.trim() === ''){
            toast('Please fill al the fields')
            return
        }
        if(password1 !== password2){
            toast('Passwords do not match')
            return
        }
        const res = await fetch(`${baseURL}/user/register`,{
            headers:{
                "Content-type":"application/json",
            },
            method:'post',
            body: JSON.stringify({
                username,
                password: password1,
                fullname
            })
        })
        const resData = await res.json()
        if(resData.message.includes('password is not strong enough')){
            toast("Password must have at least 6 characters and 1 symbol")
            return
        }
        if(resData.message.includes('User name has already been taken')) {
            toast('User name has already been taken')
            return
        }
        toast('New user added to the database')
        setTimeout(()=>{
            navigate('/signin')
        },1000)
        
    }
    return <div className="w-2/3 mx-auto pt-6 pb-6">
        <div onKeyDown={(ev) => { if (ev.key === 'Enter') handleSignUp() }} className="w-2/3 mx-auto">
            <h1 className="text-center mb-5 text-1xl"><strong>Create new account</strong></h1>
            <div >
                <label className="block mb-2" htmlFor="fullnameDemo">Your full name</label>
                <input value={fullname} onChange={(ev) => setFullName(ev.target.value)} type="text" id="fullnameDemo" className="p-3 block w-full  bg-slate-700 border-2 border-slate-400 rounded-sm mb-5" />
            </div>
            <div >
                <label className="block mb-2" htmlFor="usernameDemo">Username</label>
                <input value={username} onChange={(ev) => setUsername(ev.target.value)} type="text" id="usernameDemo" className="p-3 block w-full  bg-slate-700 border-2 border-slate-400 rounded-sm mb-5" />
            </div>
            <div >
                <label className="block mb-2" htmlFor="password1Demo">Password</label>
                <input value={password1} onChange={(ev) => setPassword1(ev.target.value)} type="password" id="password1Demo" className="p-3 block w-full  bg-slate-700 border-2 border-slate-400 rounded-sm mb-5" />
            </div>
            <div >
                <label className="block mb-2" htmlFor="password2Demo">Retype your password</label>
                <input value={password2} onChange={(ev) => setPassword2(ev.target.value)} type="password" id="password2Demo" className="p-3 block w-full  bg-slate-700 border-2 border-slate-400 rounded-sm mb-5" />
            </div>
            <div className="w-full mb-3">
                <button onClick={handleSignUp} className="bg-sky-600 hover:bg-sky-500 pe-auto w-full h-12">Sign up</button>
            </div>
            <div className="grid grid-cols-4">
                <div className="col-span-3">Already has an account?</div>
                <div className="text-end"><strong> <Link to='/signin' className="hover:text-sky-600 hover:underline">Sign in</Link></strong></div>
            </div>
            
        </div>
        <ToastContainer />
        
    </div>
}