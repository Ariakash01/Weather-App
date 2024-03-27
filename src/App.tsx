import { WiHumidity } from "react-icons/wi";
import { CiSearch } from "react-icons/ci";
import cloud from "./assets/cloud.png"

import './app.css'
import { useState } from "react";
function App() {
  const [humidity,setHumidity]=useState("64%")
const [cel,setCel]=useState("24")
const [inp_src,setInp_src]=useState("")
const [search,setSearch]=useState("thiruvengadam")
const api_key='d33a848a245356b6f2e83c704040c5db'
const [wind,setWind]=useState("12 km/hr")
const Submit= async()=>{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${inp_src}&units=Metric&appid=${api_key}`
      const response=await fetch(url)
      const data=await response.json()
      setHumidity(data.main.humidity)
      setCel(data.main.temp+" ºcel")
      setWind(data.wind.speed+" km/hr")
      setSearch(inp_src)
}

  return (
    <div className="top">
     
   <div className="main">
      <div className="first">

        <div className="first_row">
          <input type="text" onChange={(e)=>setInp_src(e.target.value)}/>
          <CiSearch className="src_icon" onClick={()=>Submit()}/>
        </div>
      </div>
        <div className="second_row">
          <img src={cloud} alt="cloud" />
          <p className="cel">{cel} </p>
          <p className="city">{search}</p>  
        </div>

        <div className="third_row">
          <div className="left">
            <WiHumidity />
            <div className="left_btm">
              <p>{humidity}</p>
              <p>humidity</p>
            </div>
        </div>
        
        <div className="right">
          <WiHumidity />
          <div className="right_btm">
             <p>{wind}</p>
             <p>wind speed</p>
          </div>
        </div>
      </div>
        
      </div>
      </div>
  )
}

export default App
