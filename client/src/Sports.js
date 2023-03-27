import React, {useState} from "react";
import ActivityInfo from "./ActivityInfo";

function Sports(){

  const [activity, setActivity] = useState(null)

  function onSelect(e){
    setActivity(e.target.name)
  }

  return(
    <div>
      <h2>Sports Camps</h2>
      <div className="flexContainer vertical">
        <div className="flexContainer vertical">
          <div className="flexContainer horizontal spaceAround">
            <div className="activityBox">
              <h3>BASIC SKILLS</h3>
              <button name="basicSkills" onClick={onSelect}>Learn more</button>
            </div>
            <div className="activityBox">
              <h3>TRACK</h3>
              <button name="track" onClick={onSelect}>Learn more</button>
            </div>
          </div>
        </div>
        <div className="flexContainer horizontal spaceAround">
          <div className="activityBox">
            <h3>SOCCER</h3>
            <button name="soccer" onClick={onSelect}>Learn more</button>
          </div>
          <div className="activityBox">
            <h3>BASEBALL</h3>
            <button name="baseball" onClick={onSelect}>Learn more</button> 
          </div>
        </div>
      </div>
      <ActivityInfo activity={activity} />
    </div>
  )
}


export default Sports