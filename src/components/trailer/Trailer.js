import React from 'react'
import './Trailer.css';
import { useParams } from 'react-router-dom';
import ReactPlayer  from 'react-player';


const Trailer = () => {
    let params = useParams();
    let key = params.tyTrailerId;
    return (
        <div className='react-player-container'>
            {(key != null) ?
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${key}`}
                    width='100%'
                    height='100%'
                    playing={true}
                    controls="true"
                />
                :
                null}
        </div>
    )
}

export default Trailer

