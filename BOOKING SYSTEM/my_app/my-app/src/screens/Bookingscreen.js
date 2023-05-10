import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Bookingscreen({ match }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post('/api/rooms/getroombyid', { roomid: match.params.roomid });
        const data = response.data.data;
        setRoom(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchRoom();
  }, [match.params.roomid]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error loading room data</h1>
      ) : room ? (
        <div>
          <div className="row">
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" alt="View from the window" />
            </div>
            <div className="col-md-5">
              <h1>{room.name}</h1>
              <img src={room.imageurls[1]} alt="Bedroom interior" />
            </div>
          </div>
        </div>
      ) : (
        <h1>Room not found</h1>
      )}
    </div>
  );
}

export default Bookingscreen;
