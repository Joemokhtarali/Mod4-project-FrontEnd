import React from "react";
import "../Css/MainContainer.css";

class AirQualityLevel extends React.Component {

  state = { 
    // atmosphere: null
  }

  // componentDidMount() {
  //   this.setState({atmosphere: {...this.props.atmosphere}})
  // }

  
  render() {
   
      return (
        
        <div className="air-quality-level">
          <h6>Air Quality Monitor</h6>
          <p>
            O₂: {this.props.atmosphere? this.props.atmosphere.oxygen : 0} 
          </p>
          <p>
            CO₂: {this.props.atmosphere? this.props.atmosphere.carbon_dioxide : 0} 
          </p>
        </div>
      );
    
  }
  }

export default AirQualityLevel;
