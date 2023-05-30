import { useState } from "react";
import clsx from "clsx";
import "./seatSelection.style.css";
import { useDispatch } from "react-redux";
import { booknowAction } from "../../redux/todoSclice";

const SeatSelection = (props) => {
  //const [selected, setSelected] = useState(props.isSelected);
  const [selectedSeats, setSelectedSeats] = useState(props.selectedListEmpty);
  const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat); //[1,2,3,4]
    if (isSelected) {
      const newSelectedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      console.log(newSelectedSeats);
      setSelectedSeats(newSelectedSeats);
    } else {
      const newSelectedSeats = [...selectedSeats, seat];
      console.log(newSelectedSeats);
      setSelectedSeats(newSelectedSeats);
      //console.log(selectedSeats);
    }
  }
  const dispatch = useDispatch();
  const booknow = () => {
    alert(
      `Booking ${selectedSeats.toString()} seats for ${props.movie.Title} `
    );
    //setSelected(true);
    dispatch(booknowAction(selectedSeats, props.movie));
    //dispatch(setActiveMovie(''));
    setSelectedSeats([]);
  };

  return (
    <div>
      <h1>Select seats for {props.movie.Title} </h1>
      <div className="Cinema">
        <div className="screen" />
        <div className="seats">
          {seats.map((seat, index) => {
            const isSelected = selectedSeats.includes(seat);
            const isOccupied = props.movie.occupied.includes(seat);
            return (
              <span
                tabIndex="0"
                key={seat}
                className={clsx(
                  "seat",
                  isSelected && "selected",
                  isOccupied && "occupied"
                )}
                onClick={isOccupied ? null : () => handleSelectedState(seat)}
                onKeyPress={
                  isOccupied
                    ? null
                    : (e) => {
                        if (e.key === "Enter") {
                          handleSelectedState(seat);
                        }
                      }
                }
              >
                {index}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        {selectedSeats.length === 0 ? null : (
          <button onClick={() => booknow()}>Book Now</button>
        )}
      </div>
    </div>
  );
};
export default SeatSelection;
