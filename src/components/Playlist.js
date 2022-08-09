import React from 'react'

function Playlist(props) {
    return (
        <div className="c-player--list">
            <div className="list-img">
                <img src={props.Song.img_src} alt="img_src"/>
            </div>
            <h3 className="list-title">{props.Song.title}</h3>
            <h4 className="list-Artis">{props.Song.Artis}</h4>
        </div>
    )
}

export default Playlist
