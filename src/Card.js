import React from "react";
import { addBook } from "./features/counter/counterSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {

  const dispatch = useDispatch()

  return props.data.map((value) => {
    return (
      <div className="col-sm-4 mx-auto my-3">
        <div className="card width">
          <img
            className="card-img-top img"
            src={value.src}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <h6 className="card-title">{value.author}</h6>
            <h6 className="card-title">Price : Rs{value.price}</h6>

            <button onClick={() => {dispatch(addBook(value))}} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
