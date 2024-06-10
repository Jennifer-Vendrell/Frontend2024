import { useEffect, useState } from "react";
import { getAllArtworks } from '../api/articApi';
import SearchArtworks from "./SearchArtworks";
import ArtworksCard from "./ArtworksCard";

const ArtworksList = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArtworkId, setSelectedArtworkId] = useState(null);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const artworksData = await getAllArtworks();
        setArtworks(artworksData);
      } catch (error) {
        console.error('Error fetching artworks:', error);      
      }finally{
        setLoading(false);
      }
    };
    //lista de las obras de arte//

    fetchArtworks();
  }, []);
  
  const handleSearch = (artworkId) =>{
    setSelectedArtworkId(artworkId);
  };
   if (loading){
    return <p>Loading artworks...</p>
   }
        

  return (
    <div className="container">
        <center>
        <h2>Artworks List</h2>  
        </center>
        <SearchArtworks onSearch={handleSearch} />
 
      
      {selectedArtworkId ? (
        <ArtworksCard artworksId={selectedArtworkId} />
      ) : (
        <ul className="list-group">
          {artworks.map((artwork) => (
            <li
              key={artwork.id}
              className="list-group-item"
              onClick={() => setSelectedArtworkId(artwork.id)}
              style={{ cursor:"pointer"}}
            >
              <h3>{artwork.title}</h3>
              <p>ID: {artwork.id}</p>
              <p>Artist: {artwork.artist_title}</p>
              <p>Date: {artwork.date_display}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ArtworksList;


//proyecto terminado//
//obras de arte//