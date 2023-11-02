import "./Card.css";

const Card = ({ data, onClick }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="container">
            <ul key={index} onClick={() => onClick(item)} className="card">
              <li>
                <img className="img" alt="Hotel Images" src={item.image} />
              </li>
              <li className="price">{item.name}</li>
              <li className="price">Rs {item.price.toLocaleString("en-US")}</li>
              <li className="breakfast">
                {item.freeBreakfast ? "Free Breakfast" : ""}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
