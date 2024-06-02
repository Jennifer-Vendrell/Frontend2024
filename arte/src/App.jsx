import  { useState } from "react";
import ArtworksCard from './components/ArtworksCard';
import ArtworksList from './components/ArtworksList';
import './assets/css/index.css';

const App =() => {
  const [selectedArtworksId, setSelectedArtworksId] = useState(null);

  return(
    <div className="container">
      <center>
      <h1>Art Institute of Chicago</h1>
      </center>
       <ArtworksList setSelectedArtworksId={setSelectedArtworksId} />
      <hr />
      {selectedArtworksId && <ArtworksCard artworkId={selectedArtworksId} />}
    </div>
  )
}

export default App;