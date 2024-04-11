import profilePic from '../assets/mypic.jpg'
import '../App.css'

import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';

const Block = (props: InjectedViewportProps<HTMLDivElement>) => {
    const { inViewport, forwardedRef } = props;
    const inViewClassNameR2L = inViewport ? 'appear-right-to-left' : 'appear-right-to-left-reversed'
    const inViewClassNameL2R = inViewport ? 'appear-left-to-right' : 'appear-left-to-right-reversed'
    return (
        <section id="AboutMe">
        <div key={String(inViewport)} className="h-screen bg-slate-800">
            <div className='align-middle'>
                <div className="grid grid-cols-12 h-fit mx-auto w-3/4">
                    <div className={`col-span-3 h-fit ${inViewClassNameL2R}`}>
                        <img src={profilePic} alt="" />
                    </div>
                    <div className={`col-span-9 justify-center h-fit w-fit mx-auto ${inViewClassNameR2L}`}>
                        <h1 className='text-center text-1xl mb-3' >
                            <span ref={forwardedRef}>Hello,</span>
                            <br />My name is Phi,
                            <br />And you are visiting my portfolio
                        </h1>
                        <h1 className='text-slate-400'>Contact</h1>
                        <div className=''>
                            <p>
                                <span className="material-symbols-outlined translate-y-1/3 mr-3">
                                    call
                                </span>
                                <span className='hover:text-slate-400 select-all'>+84 968 293 576</span>
                            </p>
                            <p>
                                <span className="material-symbols-outlined translate-y-1/3 mr-3">
                                    mail
                                </span>
                                <span className='hover:text-slate-400 select-all'>voduchoangphi@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export const AboutMe = () => {
    return <ViewportBlock/>
}