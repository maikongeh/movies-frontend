import React from 'react'
import './DisplayCarousel.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const DisplayCarousel = ({ movies }) => {

    const navigate = useNavigate();
    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }
    return (
        <div className='movie-carousel-container'>
            <Carousel>

                {
                    movies?.map((movie, i) => {
                        return (
                            <Paper key={i}>
                                <div className='movie-card-container'>
                                    <div className="movie-card" style={{ "--img": `url(${movie.backdrops.split(',')[0]})` }}>
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className="play-button-icon-container">
                                                        <FontAwesomeIcon
                                                            className="play-button-icon"
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>
                                                <div className="movie-reviews-button-container">
                                                    <Button variant = "info" onClick = {() => reviews(movie.imdbId)}> Add Review </Button>
                                                </div>

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

