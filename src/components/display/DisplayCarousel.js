import React from 'react'
import './DisplayCarousel.css';
import  Carousel  from 'react-material-ui-carousel';
import { Paper } from '@mui/material';



const DisplayCarousel = ({movies}) => {
  return (
    <div className='movie-carousel-container'>
        <Carousel>
             
            {
            movies?.map((movie, i) => {
                return (
                    <Paper key={i}>
                        <div className='movie-card-container'>  
                            <div className="movie-card" style = {{"--img": `url(${movie.backdrops.split(',')[0]})` }}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                </div>
                                 
                            </div>
                        </div>
                    </Paper>
                )
               
            })
        }
        </Carousel>   
    </div>
  )
}

export default DisplayCarousel

