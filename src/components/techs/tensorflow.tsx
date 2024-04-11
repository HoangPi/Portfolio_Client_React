import { useEffect } from 'react'
import './tech.css'
import { useAnimate } from 'framer-motion'

export const TensorflowIntro = (props: any) =>{
    const LogoImg = <img className='' width={64} height={64} src="https://i1.wp.com/albertfattal.com/wp-content/uploads/2018/03/Tensorflow_logo.svg.png?resize=1200%2C1283&ssl=1" alt="Tensorflow" />
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
        <h3><strong><a href="#DIPDemo">Tensorflow</a></strong></h3>
        <p className='text-sm'>Tensorflow is an open-source machine learning library supporting and optimizing complex computing.</p>
    </div>
}