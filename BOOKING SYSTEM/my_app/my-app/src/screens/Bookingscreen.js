import React , {useState , useEffect} from 'react'
import axios from "axios";

function Bookingscreen({match}) {

    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [room, setRoom] = useState();

    useEffect(() => {
        const fetchRoom = async () => {
          try {
            setLoading(true);
            const response = (await axios.get("/api/rooms/getroombyid" , {roomid : match.params.roomid}));
            const data = response.data;
            setRoom(data);
            setLoading(false);
        } catch(error){
            setLoading(false)
            setError(true)

        }
    };
    fetchRoom();
  }, []);
    return (
        <div><h1>Bookingscreen</h1>
            <h1>
                Room id = {match.params.roomid}
            </h1>
        </div>
    )
}

export default Bookingscreen;