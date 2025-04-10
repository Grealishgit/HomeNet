import React from 'react'
import loader from '../assets/loader.svg'

const Loader = () => {
    return (
        <div className='min-h-screen flex items-center bg-white'>
            <div className='flex mx-auto h-screen justify-center items-center'>
                <img src={loader} alt="loader" />

            </div>
        </div>
    )
}

export default Loader