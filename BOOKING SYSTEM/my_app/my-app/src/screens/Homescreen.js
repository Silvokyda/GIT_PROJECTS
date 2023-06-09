import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../components/Rooms";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/rooms/getallrooms");
        const data = response.data;
        console.log(data);
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1><Loader /></h1>
        ) : rooms.length > 1 ? (
          rooms.map((room) => (
            <div className="col-md-9" key={room.id}>
              <Room room={room} />
            </div>
          ))) : (
          <h1><Error /></h1>
        )}
      </div>
    </div>
  );
}

export default Homescreen;
