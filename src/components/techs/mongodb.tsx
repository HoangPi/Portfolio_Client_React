import { useEffect } from 'react'
import './tech.css'
import { useAnimate } from 'framer-motion'

export const MongoIntro = (props: any) =>{
    const LogoImg = <img className='' width={64} height={64} src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="MongoDB" />
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
        <h3><strong><a href="#Tech">MongoDB</a></strong></h3>
        <p className='text-sm'>MongoDB is a document-oriented databse useful for storing large amount of data.</p>
    </div>
}