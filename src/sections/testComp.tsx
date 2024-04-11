import { useAnimate, usePresence } from "framer-motion"
import { useEffect } from "react"

export const TestComp = (props: any) => {
    const reduxImg = <img width={64} height={64} src="https://th.bing.com/th/id/R.8251fe76d7487a28b07603515b300964?rik=H7lrBp652zDaWg&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f5848309bcef1014c0b5e4a9a.png&ehk=N%2fi7UuvK4YyoLcxusdDEWeftPaGIfNJl2VmpTOtLt%2bA%3d&risl=&pid=ImgRaw&r=0" alt="" />
    const [scope, animate] = useAnimate()
    const [isPresent, safeToRemove] = usePresence()

    const test = (pos: Number) => {
        if (pos === 1) {
            return {
                translateX: '0px',
                translateY: '0px',
                opacity: 1,
            }
        }
        if (pos === 2) {
            return {
                translateX: '-60px',
                translateY: '-60px',
                opacity: 0.6,
            }
        }
        if (pos === 3) {
            return {
                translateX: '-60px',
                translateY: '-120px',
                opacity: 0.4,
            }
        }
        if (pos === 4) {
            return {
                translateX: '0px',
                translateY: '-180px',
                opacity: 0.3,
            }
        }
        if (pos === 5) {
            return {
                translateX: '60px',
                translateY: '-120px',
                opacity: 0.4,
            }
        }
        if (pos === 6) {
            return {
                translateX: '60px',
                translateY: '-60px',
                opacity: 0.6,
            }
        }
    }

    useEffect(() => {
        if (isPresent) {
            const x: Number = Number(props.newPos)
            console.log(props.newPos, props.oldPos)
            const enterAnimate = async (x: Number) => {
                const test1 = test(x)
                await animate(scope.current, test1, {
                    duration: 1,
                    ease: 'easeOut'
                })
            }
            enterAnimate(x)
        }

    }, [props])
    return <div ref={scope}>
        {reduxImg}
    </div>
}

