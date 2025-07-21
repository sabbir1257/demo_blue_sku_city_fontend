/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { StepLinks, TStepLinks } from '../../../../public/datas/home/StepsLinks'
import Separator from '@/components/ui/Separator'

const StepsSection = () => {
    return (
        <section className='grid lg:grid-cols-4 md:gap-y-6 lg:gap-0  md:grid-cols-2 grid-cols-1'>
            {
                StepLinks?.map((step: TStepLinks, i: number) => {
                    return (
                        <StepsSectionCard key={i} index={i + 1} data={step} />
                    )
                })
            }
        </section>
    )
}

const StepsSectionCard = ({ index, data }: { index: number; data: TStepLinks }) => {
    const bgClasses = [
        '',
        'bg-gray-50',
        'bg-gray-100',
        'bg-gray-200',
        'bg-gray-300'
    ];

    return (
        <div className={`py-10 flex flex-col items-center gap-3 relative group lg:mx-0 mx-3  ${bgClasses[index]} || `}>
            <div className="flex justify-center mb-4">{data?.icon}</div>
            <h1 className='text-2xl font-medium mb-1'>{data?.title}</h1>
            <Separator />
            <p className='w-[25ch] text-center mt-3 text-[18px] text-gray-700 tracking-wide'>{data?.des}</p>

            {/* border line  */}
            <div className='absolute bottom-0 w-full h-1 rounded-sm bg-blue-900 group-hover:block hidden transition-all duration-500'></div>
        </div>
    );
};

export default StepsSection
