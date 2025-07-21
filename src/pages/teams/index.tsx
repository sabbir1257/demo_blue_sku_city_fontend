import Consultation from '@/components/pages/home/Consultation'
import TeamsCard from '@/components/pages/teams/TeamsCard'
import Container from '@/components/ui/Container'
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection'
import React from 'react'

const OurTeams = () => {
  return (
    <section>
      <EveryPageHeroSection  title='Our Expert' imageUrl='/images/landing.jpg'/>

      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-20 w-full'>
          <TeamsCard imageUrl='/images/man1.jpg'/>
          <TeamsCard imageUrl='/images/man2.jpg'/>
          <TeamsCard imageUrl='/images/man3.jpg'/>
          <TeamsCard imageUrl='/images/man4.jpg'/>
          <TeamsCard imageUrl='/images/man1.jpg'/>
          <TeamsCard imageUrl='/images/man2.jpg'/>
          <TeamsCard imageUrl='/images/man3.jpg'/>
          <TeamsCard imageUrl='/images/man4.jpg'/>
        </div>

        <div className=''>
          <Consultation />
        </div>
      </Container>
    </section>
  )
}

export default OurTeams
