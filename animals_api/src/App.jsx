import { useState, useEffect } from "react";
import DogCard from "./components/DogCard"; // Asegúrate de que el nombre y la ruta sean correctos

import './assets/css/index.css'; // Asegúrate de que la ruta sea correcta

const App = () => {
  const [dogImage, setDogImage] = useState("");
   // Cambiado a setAnimals

   
    const fetchRandomDogImage = async ()=>{
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    };
    useEffect(()=>{
    fetchRandomDogImage();
   }, []);

  return (
    <div className="container">
      <h1>Random Dog Image</h1> {/* Cambié a "Animals" para consistencia */}
      <hr />
      <button onClick={fetchRandomDogImage}>nueva imagen</button>
      <DogCard image= {dogImage} />
    
    </div>
  );
}

export default App;