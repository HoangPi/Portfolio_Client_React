import { useEffect } from 'react'
import './tech.css'
import { useAnimate } from 'framer-motion'
export const ReactIntro = (props: any) =>{
    const reactImg = <img className='spinning-item' width={64} height={64} src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" alt="" />
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
        <div className='w-[64px] h-[64px] mx-auto'>{reactImg}</div>
        <h3><strong><a href="#Tech">React</a></strong></h3>
        <p className='text-sm'>React is a robust front-end library for web development.</p>
    </div>
}