import { useEffect } from 'react'
import './tech.css'
import { useAnimate } from 'framer-motion'

export const UltralyticsIntro = (props: any) =>{
    const LogoImg = <img className='' width={64} height={64} src="https://avatars.githubusercontent.com/u/26833451?s=280&v=4" alt="Ultralytics" />
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
        <div className='w-[64px] h-[64px] mx-auto'>{LogoImg}</div>
        <h3><strong><a href="#DIPDemo">Ultralytics</a></strong></h3>
        <p className='text-sm'>Ultralytics provide robust tools, models for image processing machine learning tasks.</p>
    </div>
}