const DogCard = ({ image }) => {
    return (
      <div className="card">
        {image && 
        <img src={image} alt="Random Dog" />
        }
      </div>
    );
  };
  
  export default DogCard;