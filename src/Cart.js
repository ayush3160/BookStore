import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const value = useSelector((state) => state.counter.value);

  var sum = 0;

  return(
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
      {
      value.map((book,index) => {
          sum += book.price;
        return (
            <tr>
            <th scope="row">{index+1}</th>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>Rs{book.price}</td>
          </tr>
        );
      })}
      <tr>
          <th scope="row">Sum</th>
          <td></td>
          <td></td>
          <td>Rs {sum}</td>
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
  )
      
    }  
  

export default Cart;
