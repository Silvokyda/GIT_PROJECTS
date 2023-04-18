import React , {useState , useEffect} from 'react'
import axios from "axios";

function Bookingscreen({match}) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [room, setRoom] = useState();

    useEffect(() => {
        const fetchRoom = async () => {
          try {
            setLoading(true);
            const response = await axios.post("/api/rooms/getroombyid" , {roomid : match.params.roomid}).data;
            const data = response.data;
            setRoom(data);
            setLoading(false);
        } catch(error){
            setLoading(false);
            setError(true);

        }
    };
    fetchRoom();
  }, [match.params.roomid]);
    return (
        <div>
            { loading ? (<h1>Loading...</h1>) : error ? (<h1>error</h1>) : (
            <div>
                <div className='row'>
                    <div className='col-md-5'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls[0]} className="bigimg"/>    
                    </div>
                    <div className='col-md-5'>
                        <h1>{room.name}</h1>
                        <img src={room.imageurls} />
                        
                    </div>
                </div>
                </div>
        
    )
}
</div>
    )}

export default Bookingscreen;