import { useEffect, useState } from "react"
import './test.css'
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { deleteToken } from "../../store/tokenSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { baseURL } from "../../constants"

export const DeleteAccount = () => {
    const [isUpdating, setIsUpdating] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isHolding, setIsHolding] = useState(false)
    const accessToken = useAppSelector(state => state.tokenSlice.value)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isUpdating) return
        if (!isHolding) {
            setProgress(0)
            return
        }
        if (progress <= 0) return
        if (progress >= 8) {
            setIsUpdating(true)
            // console.log("Update")
            setTimeout(() => {
                fetch(`${baseURL}/user`,{
                    headers: {
                        "Content-type":"application/json",
                        "Authorization" : `Bearer ${accessToken}`
                    },
                    method:"DELETE"
                }).then((res)=>{
                    if(res.status===403){
                        toast('User is not authorized for this action')
                        setIsUpdating(false)
                        return
                    }
                    dispatch(deleteToken())
                    navigate('/signin')
                })
            }, 1000)
            setProgress(0)
            return
        }
        setTimeout(() => {
            setProgress(progress + 0.15)
        }, 30)
    }, [isHolding, progress])
    return <div className="">
        <button
            disabled={isUpdating}
            onMouseDown={() => { setIsHolding(true); setProgress(0.5) }}
            onMouseLeave={() => { setIsHolding(false); setProgress(0) }}
            onMouseUp={() => { setIsHolding(false); setProgress(0) }}
            className="z-10 bg-transparent absolute w-32 h-8  text-slate-900 hover:border-2 hover:border-spacing-1 hover:border-slate-50">
            {!isUpdating
                ? 'Delete account'
                : <span className="material-symbols-outlined mt-1 animate-spin ">
                    autorenew
                </span>}
        </button>
        <div className="w-32 h-8 bg-red-500 absolute -z-10"></div>
        <div style={{ width: String(progress) + 'rem' }} className="w-0 h-8 backdrop-brightness-75 z-0"></div>
    </div>
}