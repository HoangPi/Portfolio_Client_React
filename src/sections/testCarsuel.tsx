import { useAnimate } from "framer-motion"
import { useEffect, useState } from "react"
import { TestComp } from "./testComp"

export const TestC = () => {
    const reduxImg = <img width={64} height={64} src="https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0" alt="" />
    const [oldPos, setOldPos] = useState([1, 2, 3, 4, 5, 6])
    const [newPos, setNewPos] = useState([1, 2, 3, 4, 5, 6])
    const [scope, animate] = useAnimate()

    const handleSpin = () =>{
        setNewPos([newPos[5],...newPos.slice(0,5)])
        console.log(newPos)
    }

    useEffect(() => {
        
    },[])

    return <div className="h-screen bg-slate-900 grid grid-cols-3 gap-12 px-12 mx-auto justify-items-center">
        <div className='absolute'><TestComp newPos={newPos[0]} oldPos={oldPos[0]}/></div>
        <div className='absolute'><TestComp newPos={newPos[1]} oldPos={oldPos[1]}/></div>
        <div className='absolute'><TestComp newPos={newPos[2]} oldPos={oldPos[2]}/></div>
        <div className='absolute'><TestComp newPos={newPos[3]} oldPos={oldPos[3]}/></div>
        <div className='absolute'><TestComp newPos={newPos[4]} oldPos={oldPos[4]}/></div>
        <div className='absolute'><TestComp newPos={newPos[5]} oldPos={oldPos[5]}/></div>
        <button onClick={handleSpin} className="bg-red-600 mt-56 absolute">Click</button>
        <button  className="bg-red-600 mt-56">D</button>
    </div>
}