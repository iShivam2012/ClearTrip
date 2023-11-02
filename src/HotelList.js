import { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import Button from "./Button";
import HotelDetail from "./HotelDetail";

const HotelList = () => {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState(data);
  const [details, SetDetails] = useState();

  useEffect(() => {
    const apiFetchHandler = async () => {
      const response = await fetch(
        "https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c"
      );
      const responseData = await response.json();
      setData(responseData);
    };
    apiFetchHandler();
  }, []);

  const SearchHandler = (enteredInput) => {
    const newData = data.filter((item) => {
      return item.name.includes(enteredInput) || item.id.includes(enteredInput);
    });
    setUpdatedData(newData);
  };

  const onHotelDetailClickHandler = (clickedDetail) => {
    SetDetails(clickedDetail);
  };
  return (
    <div className="mainContainer">
      {details && <HotelDetail details={details} />}
      <Search SearchHandler={SearchHandler} />
      <Button />
      <Card
        onClick={onHotelDetailClickHandler}
        data={updatedData.length > 0 ? updatedData : data}
      />
    </div>
  );
};

export default HotelList;
