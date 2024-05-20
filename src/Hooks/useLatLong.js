import { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { latitude_longitude } from "../Utils/slices/mapSlice";

const useLatLong =(location)=>{


    const dispatch = useDispatch();

     
    const getlatlong = async ()=>{
    const url = `https://trueway-geocoding.p.rapidapi.com/Geocode?address=${location}%3CREQUIRED%3E&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f5c07c0044msh2b5e4c9395b2748p14ccdcjsn23218e6f4120',
            'x-rapidapi-host': 'trueway-geocoding.p.rapidapi.com',
       
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        dispatch(latitude_longitude({latitude : result.results[0].location.lat , longitude : result.results[0].location.lng}))

    } catch (error) {
        console.error(error);
    }

}
    useEffect(()=>{
    getlatlong();
    },[location]);
    

}


export default useLatLong