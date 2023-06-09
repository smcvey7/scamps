import React, { useState } from "react";
import ActivityInfo from "./ActivityInfo";

function Discovery() {
  const [activity, setActivity] = useState(null)
  // reveal activity info
  function onSelect(e) {
    setActivity(e.target.getAttribute("name"))
    scrollToInfo()
  }
  // automatically scroll to moreInfo when selecting activity
  function scrollToInfo() {
    const moreInfoSection = document.getElementById("moreInfo")

    moreInfoSection.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <div className="flexContainer vertical">
      <div>
        <h2 id="campType">Discovery Camps</h2>
        <h3 id="discoveryLittles">Ages 5-7</h3>
        <div className="flexContainer vertical">
          <div className="flexContainer vertical">
            <div className="flexContainer horizontal spaceAround">
              <div className="activityBox">
                <h3>Science</h3>
                <div className="container">
                  <img src="./img/science_5_7_2.jpeg" alt="science" className="image" />
                  <div className="overlay" name="scienceLittles" onClick={onSelect}>
                    <div className="text" name="scienceLittles" onClick={onSelect}>LEARN MORE</div>
                  </div>
                </div>
              </div>
              <div className="activityBox">
                <h3>Art</h3>
                <div className="container">
                  <img src="./img/art_5_7_5.jpeg" alt="art" className="image" />
                  <div className="overlay" name="artLittles" onClick={onSelect}>
                    <div className="text" name="artLittles" onClick={onSelect}>LEARN MORE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="moreInfo" className={activity ? "blue flexContainer vertical spaceAround" : null}>
        <ActivityInfo activity={activity} />
      </div>
      <div>
        <h3 id="discoveryBigs">Ages 8-10</h3>
        <div className="flexContainer vertical">
          <div className="flexContainer vertical">
            <div className="flexContainer horizontal spaceAround">
              <div className="activityBox">
                <h3>Science</h3>
                <div className="container">
                  <img src="./img/science_5_7_1.jpeg" alt="science" className="image" />
                  <div className="overlay" name="scienceBigs" onClick={onSelect}>
                    <div className="text" name="scienceBigs" onClick={onSelect}>LEARN MORE</div>
                  </div>
                </div>
              </div>
              <div className="activityBox">
                <h3>Art</h3>
                <div className="container">
                  <img src="./img/art_8_10.jpeg" alt="art" className="image" />
                  <div className="overlay" name="artBigs" onClick={onSelect}>
                    <div className="text" name="artBigs" onClick={onSelect}>LEARN MORE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discovery