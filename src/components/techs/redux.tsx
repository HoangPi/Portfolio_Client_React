import { useAnimate } from 'framer-motion'
import './tech.css'
import { useEffect } from 'react'
export const ReduxIntro = (props: any) =>{
    const reduxImg = <img className='spinning-item block left-1/2' width={64} height={64} src="https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0" alt="" />
    const [scope, animate] = useAnimate()
    useEffect(()=>{
        const enterAnimate = async ()=>{
            await animate(scope.current,props.frameStyle,{
                duration: props.duration/1000,
                ease:'linear',
            })
        }
        enterAnimate()
    },[props.frameStyle])
    
    return <div ref={scope} className='justify-items-center w-2/3 mx-auto'>
        <div className='w-[64px] h-[64px] mx-auto'>{reduxImg}</div>
        <h3><strong><a href="#ReduxDemo">Redux</a></strong></h3>
        <p>Redux is a library for managing global states.</p>
    </div>
}