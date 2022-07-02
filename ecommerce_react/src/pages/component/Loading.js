import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import './Loading.css'

function Loading() {
    return (
            <div className='spinner'>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>

    )
}

export default Loading;