import { useEffect } from 'react'
import './tech.css'
import { useAnimate } from 'framer-motion'

export const NestJsIntro = (props: any) =>{
    const LogoImg = <img className='' width={64} height={64} src="https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png" alt="NestJs" />
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
        <h3><strong><a href="#NestDemo">NestJS</a></strong></h3>
        <p className='text-sm'>A progressive NodeJs back-end framework.</p>
    </div>
}