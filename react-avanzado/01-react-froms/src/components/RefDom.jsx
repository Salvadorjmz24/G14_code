import { useRef, useEffect } from 'react'



const RefDom = () => {
    const inputRef = useRef()
    
    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.fucos()
        inputRef.current.value = 'algo'
    },[])
    return(
        <>
            <input ref={inputRef} type='tect' />
        </>

    )
}
export default RefDom