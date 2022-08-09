import React, { useState, useEffect  } from 'react';
import Player from './components/Player';

function App() {

const [ Songs] = useState([

  {
      title:"Barir Pashe Arsinagor",
      Artis:"Baul Shafi Mondol",
      img_src:"./images/B.jpg",
      src:"./music/Barir Pashe Arsinagor.mp3"
  },

  {
    title:"Dhnoo Dhnoo Boli",
    Artis:"Baul Shafi Mondol",
    img_src:"./imgages/B.jpg",
    src:"./music/Dhnoo Dhnoo Boli.mp3"
},

{
  title:"Duniya Dari",
  Artis:"Baul Shafi Mondol",
  img_src:"./imgages/B.jpg",
  src:"./music/Duniya Dari.mp3"
},

{
  title:"Khachar Vitor Ochin Pakhi",
  Artis:"Baul Shafi Mondol",
  img_src:"./imgages/B.jpg",
  src:"./music/Khachar Vitor Ochin Pakhi.MP3"
},

{
  title:"Khepa",
  Artis:"Baul Shafi Mondol",
  images_src:"./imgages/B.jpg",
  src:"./music/Khepa.MP3"
},
]);


const[CurrentSongindex, setCurrentSongindex] = useState(0);
const[NextSongindex, setNextSongindex] = useState(CurrentSongindex+1);




useEffect( () =>{
setNextSongindex ( () =>{
  if(CurrentSongindex +1 > Songs.length-1 ){
    return 0;
  }else{
    return CurrentSongindex+1;
  }
});
},[setCurrentSongindex]);







  return (
    <div className="App">
        
      <Player 
      
      CurrentSongindex={CurrentSongindex} setCurrentSongindex ={setCurrentSongindex} 
      NextSongindex={NextSongindex} songs={Songs}
      />

    </div>
  );
}

export default App;
