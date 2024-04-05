import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import  '../../Styles/HomeStyle.css'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const Home = () => {
  return (
    <>
    <Layout>
      {/* Home section main banner */}
      <Section1/>
      {/* Home section About section */}
      <Section2/>
      {/* Home section  menu */}
      <Section3/>

      {/* Home section promotion */}
      <Section4/>

      {/* hOME shop section */}
      <Section5/>

    {/* Reviews */}
      <Section6/>

      {/* Section 7 contact */}
      <Section7/>
    </Layout>
    </>
  )
}

export default Home
