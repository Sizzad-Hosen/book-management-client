import BannerCarousel from '@/components/Banner'
import BrowseCategories from '@/components/Categories'
import CTA from '@/components/CTA'
import Testimonials from '@/components/testimonial'
import React from 'react'

const Home = () => {
  return (
  <>
  
  <BannerCarousel></BannerCarousel>
  <BrowseCategories></BrowseCategories>
  <Testimonials></Testimonials>
  <CTA></CTA>
  
  </>
  )
}

export default Home