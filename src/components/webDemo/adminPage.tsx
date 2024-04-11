import { useEffect, useState } from "react"
import { useAppSelector } from "../../store/hook"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { baseURL } from "../../constants";

export const AdminPage = () => {
    const accessToken = useAppSelector(state => state.tokenSlice.value)
    const [users, setUsers] = useState([])
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false)
        setCurrentPassword('')
        setCurrentUserid('')
    };
    const [currentUserid, setCurrentUserid] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [currentName, setCurrentName] = useState('')
    const handleDelete = async () => {
        const res = await fetch(`${baseURL}/user/${currentUserid}&${currentPassword}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            method: "DELETE"
        })
        const resData = await res.json()
        if(resData.statusCode===401){
            toast(resData.message)
        }
        else {
            toast(resData.message)
            setTimeout(()=>{
                window.location.reload()
            },1000)
        }
    }
    useEffect(() => {
        const getAllUsers = async () => {
            const res = await fetch(`${baseURL}/user/getAllProfiles`, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                method: "GET"
            })
            const resData = await res.json()
            setUsers(resData)
            // console.log(resData)
        }

        getAllUsers()
    }, [])
    
    if (!users[0]) {
        return <div>
            <h1>Unauthorized</h1>
        </div>
    }
    return <div className="w-5/6 h-full mx-auto text-start">
        <div className="grid grid-cols-12 divide-x divide-slate-600">
            <div className="col-span-4 h-full divide-y-2 divide-slate-600 ">
                <h1 className="h-fit border-1 border-slate-200 w-full p-2">User ID</h1>
                {users.map((item: any) => {
                    return <div className="p-2">{item.userid.slice(0, 5)}...{item.userid.slice(-6)}</div>
                })}
            </div>
            <div className="col-span-4 h-full divide-y-2 divide-slate-600 ">
                <h1 className="border-1 border-red-600 w-full p-2">Username</h1>
                {users.map((item: any) => {
                    return <div className="p-2">{item.username}</div>
                })}
            </div>
            <div className="col-span-4 h-full divide-y-2 divide-slate-600 ">
                <h1 className="border-1 border-slate-200 w-full p-2">Role</h1>
                {users.map((item: any) => {
                    return <div className="p-2">
                        <div className="grid grid-cols-3">
                            <div className="col-span-2">{item.role}</div>
                            <div>
                                <button onClick={() => {
                                    onOpenModal()
                                    setCurrentUserid(item.userid)
                                    setCurrentName(item.username)
                                }} className="rounded-sm w-16 bg-red-600 hover:bg-red-500">Delete</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <ToastContainer/>
        <Modal open={open} onClose={onCloseModal} center>
            <div className="w-56 h-48 ">
                <h2 className="mb-3">Enter password of {currentName}</h2>
                <input onChange={(ev) => setCurrentPassword(ev.target.value)} value={currentPassword} type="password" className="p-3 w-48 mx-auto mb-3" />
                <button onClick={handleDelete} className="rounded-md bg-red-500 border-2 border-spacing-2 hover:bg-red-600 hover:border-slate-100 mr-3 w-24 p-2">Delete</button>
                <button onClick={onCloseModal} className="rounded-md bg-gray-500 border-2 border-spacing-2 hover:bg-gray-600 hover:border-slate-100 mr-3 w-24 p-2">Cancel</button>
            </div>

        </Modal>
    </div>
}