import React from 'react';
import {useState} from 'react'
import Books from './Books';

function Home() {
  const [key,setKey] = useState("Action and adventure");
  return (
    <div>
     <img className='img-size' src="/istockphoto-1216159337-1024x1024.jpg" alt="template" />
     <div className='top'>
         <h3><u>TOP BOOKS</u></h3>
          <div className='container-fluid my-5'>
            <div className='row'>
              <div className='col-sm-9 mx-auto'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <button className='btn btn-danger' onClick= {() =>{setKey("Action and adventure")}}>Action and adventure</button>
                  </div>
                  <div className='col-sm-3'>
                    <button className='btn btn-danger' onClick= {() =>{setKey("Classics")}}>Classics</button>
                  </div>
                  <div className='col-sm-3'>
                    <button className='btn btn-danger' onClick= {() =>{setKey("Fiction")}}>Fiction</button>
                  </div>
                  <div className='col-sm-3'>
                    <button className='btn btn-danger' onClick= {() =>{setKey("Horror")}}>Horror</button>
                  </div>
                </div>
                <div className='container-fluid my-3'>
                  <Books type = {key}/>
                </div>
              </div>
            </div>
          </div>
     </div>
    </div>
  );
}

export default Home;
