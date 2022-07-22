import {useRef, useEffect, useCallback} from "react";


const useScrollCount = (callback, threshold, onlyonce) => {

    let dom = useRef();
    const handleScroll = useCallback(([entry]) => {
      if(entry.isIntersecting) {
        if (onlyonce) {
          callback()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onlyonce = false;
      }
    }, []);
    
    useEffect(() => {
      let observer;
      const { current } = dom;
      if (current) {
        observer = new IntersectionObserver(handleScroll, { threshold: threshold });
        observer.observe(current);

        
        return () => observer && observer.disconnect();
      };
    }, [handleScroll, threshold]);
    
      return {
      refCount: dom,
    };
  }

  export default useScrollCount