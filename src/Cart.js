import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "./features/counter/counterSlice";
import Table from "./table";

const Cart = () => {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    const oldItem = value.filter((value, i) => {
      return i !== index;
    });

    dispatch(setValue(oldItem));

    console.log(value);
  };

  var sum = 0;

  return (
    <>
      <div className="container-fluid my-5">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Author</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {value.map((book, index) => {
              sum += book.price;
              return (
                <Table book={book} index={index} handleRemove={handleRemove} />
              );
            })}
            <tr>
              <th scope="row">Sum</th>
              <td></td>
              <td></td>
              <td>Rs {sum}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="row my-5">
          <div className="col-sm-9 mx-auto">
            <button className="btn btn-danger">Proceed To Pay</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
