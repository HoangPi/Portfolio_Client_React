import { useState } from 'react'
import '../App.css'
import { ReactIntro } from '../components/techs/react'
import { ReduxIntro } from '../components/techs/redux'
import { getStyle } from '../components/techs/getStyle'
import { NestJsIntro } from '../components/techs/nestjs'
import { TensorflowIntro } from '../components/techs/tensorflow'
import { UltralyticsIntro } from '../components/techs/ultralytics'
import { MongoIntro } from '../components/techs/mongodb'

export const Tech = () => {
    const [pos, setPos] = useState([1, 2, 3, 4, 5, 6])
    const [newStyle, setNewStyle] = useState(pos.map((item) => getStyle(item)))
    const [isSpinning, setIsSpinning] = useState(false)
    const [duration, setDuration] = useState(300)

    const handleSpin = (isFoward: boolean) => {
        // console.log(isSpinning)
        if (isSpinning) return
        setIsSpinning(true)
        var tempPos = []
        if (isFoward) {
            tempPos = [...pos.slice(1, 6), pos[0]]
        }
        else {
            tempPos = [pos[5], ...pos.slice(0, 5)]
        }
        setTimeout(() => {
            setIsSpinning(false)
        }, 300)
        setPos(tempPos)
        setNewStyle(tempPos.map((item) => getStyle(item)))


        // console.log(newStyle[0])
    }
    const handleSelectiveSpin = async (newPos: number) => {
        const focusPos = pos.indexOf(1)
        let k = newPos + focusPos - 6
        if (focusPos === 0) k = 6 + k

        if (k < 0) {
            if (Math.abs(k) > 3) k = 6 + k
        }
        if (Math.abs(k) > 3) k = k - 6


        // console.log(k)
        if (k === 0) return
        var tempPos = []
        if (k > 0) {
            tempPos = pos
            setDuration(200)
            for (let i = 0; i < k; i++) {
                tempPos = [...tempPos.slice(1, 6), tempPos[0]]
                setPos(tempPos)
                setNewStyle(tempPos.map((item) => getStyle(item)))
                await new Promise(resolve => setTimeout(resolve, 200))
            }
        }
        else {
            tempPos = pos
            setDuration(200)
            k = Math.abs(k)
            for (let i = 0; i < k; i++) {
                tempPos = [tempPos[5], ...tempPos.slice(0, 5)]
                setPos(tempPos)
                setNewStyle(tempPos.map((item) => getStyle(item)))
                await new Promise(resolve => setTimeout(resolve, 200))
            }
        }
        setDuration(300)
        // 
    }

    return <section id="Tech">
        <div className="h-screen bg-slate-900 px-12 mx-auto justify-items-center">
            <h1 className='text-3xl pt-24 mb-3 mx-auto text-center'>Technologies</h1>
            <p className='text-sm mx-auto text-center mb-12'>Here are the technologies I am familiar with</p>
            <div className='h-1/3 w-3/4 grid grid-cols-12 mx-auto'>
                <div className='w-full h-full bg-gradient-to-r from-slate-800 to-slate-950'>
                    <button onClick={() => handleSpin(false)} className='w-full h-full'>
                        <span className="material-symbols-outlined">
                            arrow_back_ios_new
                        </span>
                    </button>
                </div>
                <div className='col-span-10 w-full min-w-48 h-full mx-auto text-center backdrop-blur-sm bg-slate-950'>
                    {/* this div tag is just for filtering */}
                    <div style={{ zIndex: 5 }} className='absolute w-full h-full backdrop-blur-sm'></div>
                    <div style={{ zIndex: pos[0] == 1 ? 5 : 0 }} className={`absolute w-full mx-auto top-1/3`}><ReactIntro frameStyle={newStyle[0]} duration={duration} /></div>
                    <div style={{ zIndex: pos[1] == 1 ? 5 : 0 }} className={`absolute w-full mx-auto top-1/3`}><TensorflowIntro frameStyle={newStyle[1]} duration={duration} /></div>
                    <div style={{ zIndex: pos[2] == 1 ? 5 : 0 }} className={`absolute w-full mx-auto top-1/3`}><UltralyticsIntro frameStyle={newStyle[2]} duration={duration} /></div>
                    <div style={{ zIndex: pos[3] == 1 ? 5 : 0 }} className={`absolute w-full mx-auto top-1/3`}><MongoIntro frameStyle={newStyle[3]} duration={duration} /></div>
                    <div style={{ zIndex: pos[4] == 1 ? 5 : 0 }} className={`absolute w-full mx-auto top-1/3`}><NestJsIntro frameStyle={newStyle[4]} duration={duration} /></div>
                    <div style={{ zIndex: pos[5] == 1 ? 5 : 0 }} className={`absolute w-full mx-auto top-1/3`}><ReduxIntro frameStyle={newStyle[5]} duration={duration} /></div>
                </div>
                <div className='w-full h-full bg-gradient-to-r from-slate-950 to-slate-800'>
                    <button onClick={() => handleSpin(true)} className='w-full h-full'>
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </button>
                </div>
            </div>
            <div className='mx-auto w-1/2 mt-8 grid grid-cols-6 justify-items-center'>
                <button onClick={() => handleSelectiveSpin(0)} className={`rounded-full h-6 w-6 border-4 ${pos[5] == 6 ? 'border-slate-200 bg-slate-200' : 'border-slate-400'} hover:bg-slate-200`}></button>
                <button onClick={() => handleSelectiveSpin(1)} className={`rounded-full h-6 w-6 border-4 ${pos[4] == 6 ? 'border-slate-200 bg-slate-200' : 'border-slate-400'} hover:bg-slate-200`}></button>
                <button onClick={() => handleSelectiveSpin(2)} className={`rounded-full h-6 w-6 border-4 ${pos[3] == 6 ? 'border-slate-200 bg-slate-200' : 'border-slate-400'} hover:bg-slate-200`}></button>
                <button onClick={() => handleSelectiveSpin(3)} className={`rounded-full h-6 w-6 border-4 ${pos[2] == 6 ? 'border-slate-200 bg-slate-200' : 'border-slate-400'} hover:bg-slate-200`}></button>
                <button onClick={() => handleSelectiveSpin(4)} className={`rounded-full h-6 w-6 border-4 ${pos[1] == 6 ? 'border-slate-200 bg-slate-200' : 'border-slate-400'} hover:bg-slate-200`}></button>
                <button onClick={() => handleSelectiveSpin(5)} className={`rounded-full h-6 w-6 border-4 ${pos[0] == 6 ? 'border-slate-200 bg-slate-200' : 'border-slate-400'} hover:bg-slate-200 `}></button>
            </div>
        </div>

    </section>
}