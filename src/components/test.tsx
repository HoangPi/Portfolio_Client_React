import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';
import '../App.css'

const Block = (props: InjectedViewportProps<HTMLDivElement>) => {
    const { inViewport, forwardedRef } = props;
    return (
        <div className="viewport-block appear-top-to-bot" ref={forwardedRef}>
            <div />
        </div>
    );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export const Component = () => {
    return <ViewportBlock/>
}