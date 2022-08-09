import React,{useEffect, useRef, useState } from 'react';
import Playerlis from './Playlist';
import PlayerControl from './PlayerControl';

function Player(props) {

    const audioEl = useRef(null);

    const [isplaying ,setIsplaying ] = useState(false); 
    
    useEffect( ()=>{
    
        if(isplaying ){
                audioEl.current.play();
        }
        else{
            audioEl.current.pause();
        }
    });
    
    const skipSong = (foroward = true) =>{
    
    if(foroward){
        props.currentSongindex(()=>{
    
            let temp = props.currentSongindex;
            temp++;
    
            if(temp>props.Songs.length -1){
                temp=0;
            }
    
            return temp;
    
        });
    
    }else{
        props.currentSongindex(()=>{
    
            let temp = props.currentSongindex;
            temp--;
    
            if(temp>0){
                temp=props.Songs.length-1 ;
            }
    
            return temp;
    
        });
    
    }
    
    
    }


    return (
            <div className="c-player--main">
                <audio src={props.Songs[props.currentSongindex].src} ref={audioEl}></audio>
                <h4>Playing Now</h4>
                <Playerlis Song={props.Song[props.currentSongindex]} />
                <PlayerControl isplaying={isplaying} setIsplaying={setIsplaying}  skipSong={skipSong} />
                <p><strong>Next Up:</strong>{props.songs[props.NextSongindex].title} by {props.songs[props.NextSongindex].Artis} </p>
                
            </div>
    )
}

export default Player
