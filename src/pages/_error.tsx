import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection'
import Link from 'next/link'
import React from 'react'

const _error = () => {
    return (
        <section>
            <EveryPageHeroSection title='PAGE NOT FOUND' />

            <Container className='my-20 flex flex-col gap-5 items-center'>
                <h1 className='text-8xl tracking-wider font-semibold'>404</h1>
                <h1 className='text-5xl'>Looks like somthing went wrong</h1>
                <p className='paragraph'>The page you are looking for was moved, removed, renamed or might never existed.</p>
                <Link href={"/"}>
                    <Button className='bg-blue-900 rounded-md text-white'>GO HOME</Button>
                </Link>
            </Container>

        </section>
    )
}

export default _error
