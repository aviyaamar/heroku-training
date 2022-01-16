
import React, {useEffect,  useState} from "react";
import axios from 'axios'

 const App = () => {
   const [forecast, setforcase] = useState([])
   const [location, setLocation] = useState([])
  

   const handleApi= async(location)=>{
    try{
      const {data} =await axios.get(`http://localhost:5000/weather?address=${location}`)
      console.log(data);
      setforcase(data);
    }catch(e){

    }
  }


  return (
    <div>
      <label>enter country</label>
      <input type="text" onChange={(e)=>setLocation(e.target.value)} />
      <button type="submit" className="search-button" onClick={()=>handleApi(location)} >Search</button>
      <div>
      <div>
        <h2> forecst: {forecast? forecast.forecast: null}</h2>
        <h2>location: {forecast? forecast.location: null}</h2>
        <h2>address: {forecast? forecast.address: null}</h2>
      </div>

      </div>
    </div>
  )
}
export default App