import "./Card.css";

const HotelDetail = ({ details }) => {
  console.log(details);
  return (
    <div className="container">
      <ul className="card">
        <li>
          <img className="img" alt="Hotel Images" src={details.image} />
        </li>
        <li className="price">Rs {details.price.toLocaleString("en-US")}</li>
        <hr />
        <li>{details.location}</li>
        <li>{details.description}</li>
        <li>{`${details.price.toLocaleString("en-US")}/night(all incl.)`}</li>
      </ul>
    </div>
  );
};

export default HotelDetail;
