import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';


function Bookingscreen() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();

  const { roomid } = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post('/api/rooms/getroombyid', { roomid });
        const data = response.data;
        setRoom(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchRoom();
  }, [roomid]);

  return (
    <div className='m-5'>
      {loading ? (
        <h1><Loader /></h1>
      ) : error ? (
        <h1><Error /></h1>
      ) : (
        <div>
          <div className="row justify-content-center mt-5 bs">

            <div className="col-md-6">
              {room && room.name && <h1>{room.name}</h1>}
              {room && room.imageurls && room.imageurls[0] && (
                <img src={room.imageurls[0]} className="bigimg" alt="loading" />
              )}
            </div>

            <div className="col-md-6"> 

              <div style={{ textAlign: 'right' }}>
                <h1>Booking Details</h1>
                <b>
                  <hr />
                  <p>Name : </p>
                  <p>From Date : </p>
                  <p>To Date :  </p>
                  <p>Max Count : {room && room.maxcount}</p>
                </b>
              </div>

              <div style={{ textAlign: 'right' }}>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p> Total Days : </p>
                  <p> Rent per day : {room.rentperday} </p>
                  <p> Total Amount : </p>
                </b>
              </div>

              <div style={{ float: 'right' }}>
                <button className="btn btn-primary">Pay Now</button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookingscreen;
