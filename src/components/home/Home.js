import React from 'react'
import DisplayCarousel from '../display/DisplayCarousel'

const Home = ({movies}) => {
  return (
    <div>
       <DisplayCarousel movies={movies}/>
    </div>
  )
}

export default Home
  