import React, {useState} from "react";

const SearchArtworks = ({onSearch}) => {
  const [artworksId, setArtworkId] = useState("");

  const handleInputChange = (event) => {
    setArtworkId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(artworksId);
    localStorage.setItem('artworksId', artworksId);
    setArtworks(""); //  búsqueda
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Artwork ID"
        value={artworksId}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchArtworks;