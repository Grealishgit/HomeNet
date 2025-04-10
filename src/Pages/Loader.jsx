import React from 'react'
import loader from '../assets/loader.svg'
import spinner from '../assets/tube-spinner.svg'

const Loader = () => {
    return (
        <div className='min-h-screen fixed flex w-full bg-white'>
            <div className='flex w-full h-screen justify-center items-center '>
                <img src={spinner} alt="spinner" className='h-50 w-50 ' />

            </div>
        </div>
    )
}

export default Loader