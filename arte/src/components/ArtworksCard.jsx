import { useEffect, useState } from "react";
import { getArtworks } from "../api/articApi";

const ArtworksCard = ({artworksId}) => {
    const [artworks, setArtworks] = useState(null);
    const[error, setError] = useState(null);

    useEffect(() => {
        const storedArtworkId = localStorage.getItem('artworksId');
        const fetchArtwork = async (id) => {
            try{
                setError(null);
            const data = await getArtworks(id);
            if (!data || Object.keys(data).length === 0){
                throw new Error("Artwork not found")
            }
            setArtworks(data);
        } catch (error){
           setError("Error fetching artwork data:" + error.message);
           setArtworks(null);
        }
    };
    //detalles de obra de arte//
    const idToFetch = artworksId || storedArtworkId;
        if (idToFetch) {
            fetchArtwork(idToFetch);  
            localStorage.setItem('artworksId', idToFetch); 
        }    
    }, [artworksId]);

    if(error){
        return <p>{error}</p>
    }

    if (!artworks){
        return <p>Loading artwork...</p>
    }

    return (
        <div className="card text-center">
            <div className="card-body">
                 <h2 className="card-title">{artworks.title}</h2>
                    <p className="card-text">{artworks.artist_title}</p>
                    <div className="text-center">
                    <img
            src={`https://www.artic.edu/iiif/2/${artworks.image_id}/full/400,/0/default.jpg`}
            alt={artworks.title}
            className="img-fluid"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          </div>        
          <p className="card-text">Date: {artworks.date_display}</p>
          <p className="card-text">Medium: {artworks.medium_display}</p>
          <p className="card-text">place_of_origin: {artworks.place_of_origin}</p>
                </div>
                </div>     
    );
};

export default ArtworksCard;