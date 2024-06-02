const BASE_URL = import.meta.env.VITE_articApi_CURRENT_URL;
export const getArtworks = async (artworksId) => {
    const response = await fetch(`${BASE_URL}/${artworksId}`);
    const data = await response.json();
    return data.data;
  };
  
  export const getAllArtworks = async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.data;
  };