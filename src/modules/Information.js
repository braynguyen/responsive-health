import React from "react"
import "./information.css"

export default function Information() {
  return (
    <div className="row">
      <h1 className="InfoHeader">Our Services</h1>
      <div className="column">
        <h2 className="Sub-Headers">Responsive Health</h2>
        <img
          src=""
          alt="Not Found"
          className="ResponsiveMedicineImage"
        />
        <p> swag swag swag </p>
      </div>
      <div className="column">
        <h2 className="Sub-Headers">Responsive Medicine</h2>
        <img
          src=""
          alt="Not Found"
          className="ResponsiveHealthImage"
        />
        <p>SWAG SWAG SWAG</p>
      </div>
    </div>
  )
}
