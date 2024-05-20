import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadRestroMenu } from "../Utils/slices/restroSlice"

const useRestroMenu=(resid)=>{
const dispatch = useDispatch()
const {lat,lng} = useSelector(store=>store.map)
const MenuURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=`

useEffect(()=>{
    fetchRestro()
},[])



const fetchRestro =async()=>{
const data = await fetch(MenuURL + resid)
const json = await data.json();
console.log(json)
dispatch(loadRestroMenu(json?.data)) }

}

export default useRestroMenu