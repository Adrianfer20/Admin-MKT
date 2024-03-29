import useAnimationTimeout from "../hooks/useAnimationTimeout";

export const removeClassAnimation = (tickets) =>{
    const dependecys = [tickets]
    const selector = '.animacion'
    const time = 6000;
    useAnimationTimeout(dependecys, selector, time);
}

