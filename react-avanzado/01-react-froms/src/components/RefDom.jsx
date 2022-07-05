import { useRef, useEffect } from 'react'



export const RefDom = () => {

    const inputRef = useRef()

    useEffect(() => {
        return () => {
            console.log(inputRef.current);
            inputRef.current.focus();
            inputRef.current.value = 'algo';

        };
    }, [])


    return (
        <input ref={inputRef} type='text' />
    )
}

export default RefDom