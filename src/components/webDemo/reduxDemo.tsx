import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { deleteUser, saveUser } from "../../store/userSlice"

export const ReduxDemo = () => {
    const [yourName, setYourName] = useState(useAppSelector(state => state.userSlice.value))
    const [lastName, setLastName] = useState(useAppSelector(state => state.userSlice.value))
    const [timeRemain, setTimeRemain] = useState(0)
    const dispatch = useAppDispatch()
    const handleSaveUser = () => {
        dispatch(saveUser(yourName))    
        setLastName(yourName)
        // setTimeRemain(60)
    }
    const handleRollBack = () => {
        setYourName(lastName)
    }
    const handleDeleteUser = () => {
        dispatch(deleteUser())
        setLastName('')
        setYourName('')
        setTimeRemain(0)
    }

    useEffect(() => {
        setTimeout(() => {
            const time = JSON.parse(JSON.parse(localStorage.getItem('persist:root') as string).userSlice).__persisted_at
            const remain = 60 - ((Date.now() - time) / 1000)
            // console.log(remain)
            if (lastName === '') {
                setTimeRemain(0)
                return
            }
            if (remain <= 0) {
                setYourName('')
                setLastName('')
                return
            }
            setTimeRemain(remain)
        }, 1000)

    }, [timeRemain, lastName])

    return <div id="ReduxDemo" className="w-full">
        <div className="grid grid-cols-2">
            <div className="">
                <h1 className="text-4xl mb-3"><strong>Redux</strong></h1>
                <p>Redux library provides tool for controlling global states, persists stated and also secures it.</p>
                <p>Time remain: {String(timeRemain).split('.')[0]}</p>
            </div>
            <div className="justify-items-center">
                <div className="w-2/3 mx-auto">
                    <label className="text-sm opacity-75 block mb-2" htmlFor="YourName">Your name</label>
                    <input onChange={(ev) => setYourName(ev.target.value)} value={yourName} className="rounded-sm bg-slate-500 focus:bg-slate-600 text-slate-50 block mb-3 w-full" type="text" id="YourName" />
                    <div className="grid grid-cols-3 gap-6">
                        <button onClick={handleSaveUser} className="rounded-sm bg-green-700 w-fit min-w-16">Save</button>
                        <button onClick={handleRollBack} className="rounded-sm bg-yellow-700 w-fit min-w-16">Roll back</button>
                        <button onClick={handleDeleteUser} className="rounded-sm bg-red-700 w-fit min-w-16">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}