import React, { useRef, useEffect } from "react";


function useAlerter(ref,props) {
  useEffect(() => {

    // if click on backroud, nullify current user
    function handleBgClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setter('none')
      }
    }
    // add listener
    document.addEventListener("mousedown", handleBgClick);
    return () => {
      // remove listener during cleaning stage
      document.removeEventListener("mousedown", handleBgClick);
    };
  }, [ref]);
}

export default function OutsideAlerter(props) {
  const wrapperRef = useRef(null);
  useAlerter(wrapperRef,props);
  return <div ref={wrapperRef} className='wrap'>{props.children}</div>;
}