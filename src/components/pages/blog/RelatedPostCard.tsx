/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

const RelatedPostCard = () => {
    return (
        <div>
            <div className='w-full max-h-[260px] h-full relative'>
                <Image width={100} height={100} className='w-full max-h-[260px] rounded-md shadow-sm h-full' src="/images/land.jpg" alt="land" />
                <div className='absolute bottom-4 left-4'>
                    <button className='bg-blue-900 rounded-md px-4 py-1 text-sm text-white font-medium shadow-md'>May 06,2020</button>
                </div>
            </div>
            <div className='my-3'>
                <h1 className='text-xl font-semibold'>Make the best of things its an uphill climb long time</h1>
                <button className='mt-3 font-bold text-blue-800'>READ MORE</button>
            </div>
        </div>
    )
}

export default RelatedPostCard
