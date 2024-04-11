export function getStyle(pos: Number) {
    if (pos === 1) {
        return {
            translateX: '0rem',
            translateY: '0rem',
            opacity: 1,
            scale: 1.3,
        }
    }
    if (pos === 2) {
        return {
            translateX: '-6rem',
            translateY: '-4rem',
            opacity: 0.6,
            scale: 0.6
        }
    }
    if (pos === 3) {
        return {
            translateX: '-7rem',
            translateY: '-6rem',
            opacity: 0.4,
            scale: 0.4
        }
    }
    if (pos === 4) {
        return {
            translateX: '0rem',
            translateY: '-8rem',
            opacity: 0.3,
            scale: 0.3
        }
    }
    if (pos === 5) {
        return {
            translateX: '7rem',
            translateY: '-6rem',
            opacity: 0.4,
            scale: 0.4
        }
    }
    return {
        translateX: '6rem',
        translateY: '-4rem',
        opacity: 0.6,
        scale: 0.6
    }

}