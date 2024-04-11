import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { deleteToken, saveToken } from "../../store/tokenSlice";
import { DeleteAccount } from "./deleteAccount";
import { baseURL } from "../../constants";

export const HomePage = () => {
    const accessToken = useAppSelector(state => state.tokenSlice.value)
    const [isUpdating, setIsUpdating] = useState(false)
    const [fullname, setFullname] = useState('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (accessToken === '') {
            dispatch(deleteToken())
            setTimeout(() => {
                navigate('/signin')
            }, 2000)
            return
        }
        fetch(`${baseURL}/user`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            method: "GET"
        }).then((res: Response) => {
            res.json().then((resData: any) => {
                if (!resData.role) {
                    toast("Session timed out")
                    dispatch(deleteToken())
                    navigate('/signin')
                }
                toast(`Welcome ${resData.role} ${resData.fullname}`)
                setFullname(resData.fullname)
            })
        }).catch((err) => {
            toast("Session timed out")
            dispatch(deleteToken())
            navigate('/signin')
            console.log(err)
        })

    }, [accessToken])
    const handleUpdateAccount = async () => {
        setIsUpdating(true)
        const resData = await fetch(`${baseURL}/user/${fullname}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            method: "PATCH"
        })
        const data = await resData.json()
        // console.log(data)
        if (!data.access_token) {
            toast('session timed out')
            dispatch(deleteToken())
            setTimeout(() => {
                navigate('/signin')
            }, 1000)
            return
        }
        console.log(data.access_token)
        dispatch(saveToken(data.access_token))
        setIsUpdating(false)
    }

    if (accessToken === '') return <div className="align-middle">
        <h1 className="block text-center text-2xl">User has to log in before using the system</h1>
    </div>
    else return <div className="h-full">
        <ToastContainer />
        <div className="w-2/3 align-middle mx-auto">
            <div className="">
                <label htmlFor="userfullname" className="block mb-3">User's name</label>
                <input onChange={(ev) => setFullname(ev.target.value)} value={fullname} type="text" className="text-slate-950 rounded-sm block mb-3" />
                <button onClick={handleUpdateAccount} className="block rounded-sm bg-green-400 text-slate-900 mb-3 w-24 h-8 border-2 border-green-400 hover:bg-green-500 hover:border-2 hover:border-spacing-2 hover:border-green-50">
                    {!isUpdating ? 'Update' :
                        <span className="material-symbols-outlined text-slate-600 mt-1 animate-spin">
                            autorenew
                        </span>}
                </button>
                <DeleteAccount />
            </div>
            <ul className="list-disc my-6">
                <li>Only admin can delete self-account (or other admin's account if you somehow be able to tamper the token correctly).</li>
                <li>Admin can delete other users' accounts in admin panel if admin can verify that user's password.</li>
                <li>To create an admin account, add "admin" at the start of your username.</li>
                <li>Token only lasts for 5 minutes.</li>
                <li>Update your name to refresh your token.</li>
            </ul>
        </div>


    </div>
}