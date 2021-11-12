import React, {Component} from "react"
import Select from 'react-select'
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      stations: [],
      selectOptions : [],
      id: "",
      name: ''
    }
  }

// Getting all available stations from the API with Axios 
 async getOptions(){
    const res =  await axios.get ('http://apis.is/weather/getAvailableStations')
    const data = res.data.results

    const options = data.map(d => ({
      "value" : d.id,
      "label" : d.name
    }))

    this.setState({selectOptions: options})
  }

  handleChange(e){
   this.setState({id:e.value, name:e.label})
   this.getStations(e.value);
  }

  async componentDidMount(){
      this.getOptions();  
  }

// Getting weather observations from the selected station from the API using FETCH
  async getStations(id) {
    const res = await fetch(`http://apis.is/weather/observations/en?stations=${id}`);
    const data = await res.json();
    const stations = data.results
    this.setState({stations});
    return data.results;
  }
  

  render() {

    const Station = ({ name, time, W, T, F }) => (
      <div>
          <p>Here is the weather observations for <strong>{name}</strong>:</p>
          <p>Date and time: <strong>{time}</strong></p>
          <p>Weather description: <strong>{W}</strong></p>
          <p>Temperature: <strong>{T}°C</strong></p>
          <p>Wind speed: <strong>{F}m/s</strong></p>
        </div>
    );
         
    return (
      <div>
        <Select options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
        <p>You have selected <strong>{this.state.name}</strong> whose id is <strong>{this.state.id}</strong></p>
   
        {this.state.stations.map((station) => (
          <Station
            name={station.name}
            time={station.time}
            W={station.W}
            T={station.T}
            F={station.F}
            key={station.id}
          />
        ))}
    </div>
    )
  }
}

export default App