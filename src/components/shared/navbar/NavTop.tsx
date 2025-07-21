/* eslint-disable @next/next/no-img-element */
import { EmailSendIcon, LocationIcon } from '@/components/Icons/Icons'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const NavTop = () => {
    return (
        <div>
            <section className='flex lg:flex-row flex-col text-gray-600 items-center lg:gap-4 gap-5 lg:justify-between md:py-5'>
                <img className='w-[100px]' src="/images/Logo_PNG.png" alt="logo" />
                <div className='hidden md:block'>
                    <div className='grid grid-cols-6 lg:gap-10 gap-3 items-center lg:mx-0 md:mx-2'>
                        <div className='flex gap-3 items-center col-span-3'>
                            <LocationIcon className='text-[40px]' />
                            <div>
                                <h1 className='text-xl font-medium '>Address:</h1>
                                <p className='text-gray-500 '>Dhaka Office : MuktoBangla Shpping Complex,Space # 49/50 (5th Floor), Plot- 04, Mirpur-1, Dhaka-1216, Bangladesh.</p>
                            </div>
                        </div>
                        {/* <div className='w-[1.5px] h-[38px] bg-gray-400'>
                            // seperator 
                        </div> */}
                        <div className='flex gap-3 items-center col-span-2'>
                            <EmailSendIcon className='text-[40px]' />
                            <div>
                                <h1 className='text-xl font-medium '>Mail us:</h1>
                                <p className='text-gray-500 '>blueskycitylimited@gmail.com

                                </p>
                            </div>
                            {/* <Image width={300} height={300} src={'/images/logo/logo.png'} alt='logo'/> */}
                        </div>
                       <Link href={'/contact'}>
                        <Button className='border border-indigo-600 rounded-md shadow-md'>Contact Now</Button>
                       </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NavTop
