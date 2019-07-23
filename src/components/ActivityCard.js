import React from "react"
import "../css/Activity.css"
const ActivityCard = () =>{
  return(
    <div className="bg-white shadow-lg flex flex-col h-64 w-64 relative">
      <div className="bg-grefacc w-64 h-56">0</div>
      <div className="ml-4 text-black bg-white font-bold h-auto W-64 ">
      ️ Stands d'expositions
      </div>
      <div className=" placeit border-2 border-green-300 bg-green-300 text-black font-bold z-40 w-auto absolute"># JFAC 20</div>
    </div>
  )
}
export default ActivityCard