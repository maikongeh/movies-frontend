import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../api/axiosConfig'
import { Col, Container, Row } from 'react-bootstrap'
import ReviewForm from '../reviewForm/ReviewForm'


import React from 'react'

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        try {
            console.log(rev.value);
            console.log(movieId);
            console.log("I am in the try block");
            const response = await api.post("api/v1/reviews", {reviewBody: rev.value, imdbId: movieId});
            console.log(response.data);
            const updatedReviews = reviews != null? [...reviews, { body: rev.value }]: [{ body: rev.value }];
            rev.value = "";
            setReviews(updatedReviews);
        } catch (error) {
            console.log(error);
        }
       
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className='mt-2'>
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm handleClick = {addReview} revText = {revText} labelText = "Write a Review?"></ReviewForm>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                    </Row>
                        </>
                    }
                    {
                        reviews?.map((review) => {
                            return (
                                <>
                                    <Row >
                                        <Col>
                                            <p>{review.body}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>

                            )
                        })
                    }
                </Col>
            </Row>

        </Container>
    )
}

export default Reviews
