import { useEffect } from "react";

const useAnimationTimeout = (dependecy, selector, timeout) => {
  useEffect(() => {
    const element = document.querySelector(selector);
    if (!element) return;

    const animationTimeout = setTimeout(() => {
      element.classList.remove("animacion");
    }, timeout);

    return () => clearTimeout(animationTimeout);
  }, dependecy);
};

export default useAnimationTimeout;
