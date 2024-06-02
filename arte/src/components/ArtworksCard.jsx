import { useEffect, useState } from "react";
import { getArtworks } from "../api/articApi";

const ArtworksCard = ({artworksId}) => {
    const [artworks, setArtworks] = useState(null);

    useEffect(() => {
        const fetchArtwork = async () => {
            try{
            const data = await getArtworks(artworksId);
            setArtworks(data);
        } catch (error){
            console.error("Error fetching artwork data:", error);
        }
    };
    //detalles de obra de arte//
        if (artworksId) {
            fetchArtwork();   
        }    
    }, [artworksId]);

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