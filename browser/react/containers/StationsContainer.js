import {connect} from 'react-redux';
import Stations from '../components/Stations';


function convertSongs(songs){
    return songs.reduce((obj, song) => {
        if(obj[song.genre]) obj[song.genre].push(song)
        else obj[song.genre] = [song]
        return obj
    }, {})
}

function mapStateToProps(state, ownProps){
    console.log("-------", ownProps);
    return { stations: convertSongs(state.songs) };
}

function mapDispatchToProps(dispatch){
    return {};
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);


export default StationsContainer; 