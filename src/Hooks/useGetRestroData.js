import { useEffect } from "react"
import { isMobile } from "react-device-detect"
import { useDispatch, useSelector } from "react-redux"
import { loadAllRestro } from "../Utils/slices/restroSlice"

const useGetRestroData =()=>{

    const {lat , lng} = useSelector(store => store.map)
    const dispatch = useDispatch()
    if( !lat && !lng) console.log("no lat and lng");


    let API_URL = ""

    if(isMobile){
        API_URL = `https://www.swiggy.com/mapi/restaurants/list/v5?lat=${lat}&lng=${lng}`   
    }
    else{
        API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    }
   
    useEffect(()=>{
    fetchRestroData();
    },[API_URL])


   
    const fetchRestroData =async()=>{
     const data = await fetch(API_URL);
     const json = await data.json();
     
     const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.
     infoWithStyle?.restaurants  ||  json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
     ?.restaurants
     dispatch(loadAllRestro(restaurants));
     
    }
     
}

export default useGetRestroData ;