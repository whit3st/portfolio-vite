// DEFAULT PAGE ANIMATION
export const variants = {
    initial: {
        opacity: 0,
        x: -10,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            staggerChildren: .4,
        },
    },
    exit: {
        opacity: 0,
        x: -10,
    },
};

// BUTTON ANIMATION
export const buttons = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 1,
        },
    },
    exit: {
        opacity: 0,
    },
}
// NAVBAR ANIMATION
export const navbar = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
    },
};
