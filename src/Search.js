import React from "react";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./features/counter/counterSlice";

const Search = (props) => {

    const dispatch = useDispatch();

    const [search,setSearch] = useState([])

    useEffect(() => {
        fetch("./Books.json").then((reponse) => {
            return reponse.json();
        }).then((data) => {
            setSearch(data);
        })
    },[])
    return  (<>
    <p><span style={{color : "red"}}>*</span>you can search through name and type of book</p>
    <h1>Your Search Results for "{props.search.toUpperCase()}"</h1>
    <div className="row my-5 mx-auto">
        {
            search.map((value) => {
                if(value.name.toLowerCase().includes(props.search.toLowerCase()) || value.type.toLowerCase().includes(props.search.toLowerCase())){
                    return(
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
                    )
                }
            })
        }
        </div>
    </>    
    )
}

export default Search;