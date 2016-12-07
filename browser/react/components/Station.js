import React from 'react';
import Songs from './Songs';

const Station = (props) => {
    return (
        <div>
            <div>
                <h2>{props.params.stationName} Station</h2>
            </div>
            <div>
                <Songs songs={props.songs} />
            </div>
        </div>
    )
}


export default Station;