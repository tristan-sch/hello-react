import React, {Component} from "react"
import Select from 'react-select'
import axios from 'axios'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      stations: [],
      selectOptions : [],
      id: 1,
      name: ''
    }
  }

// Accessing the API with all available stations

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
      const stations = await this.getStations(1);
      
  }


// Accession the API with the weather observations

  async getStations(id) {
    // const id = 
  
    const res = await fetch(`http://apis.is/weather/observations/en?stations=${id}`);
    const data = await res.json();
    const stations = data.results
    this.setState({stations});
    return data.results;
  }
  

  render() {

    const Station = ({ name, time, link }) => (
      <div>
          <p>{name}</p>
          <p>{time}</p>
          <p>{link}</p>
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
            link={station.link}
            key={station.id.value}
          />
        ))}
    </div>
    )
  }
}

export default App

// AUTRE CODE QUI MARCHE 
// class App extends Component {

//     constructor() {
//         super()
//         this.state = {
//             stations: [],
//             cities: []
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.getStations = this.getStations.bind(this);
//     }

//     async getStations() {
//       let id
//       if (this.state.city === "Test") {
//         id = 1
//       } else {
//         id = 422
//       }

//       const res = await fetch(`http://apis.is/weather/observations/en?stations=${id}`);
//       const data = await res.json();
//       return data.results;
//     }
  
//     async componentDidMount() {
//       const stations = await this.getStations();
//       this.setState({
//         stations,

//         cities: [
//           {id: '0', name: '--Select the city--'},
//           {id: '1', name: 'Reykjavík'},
//           {id: '422', name: 'Akureyri'},
//           {id: '0', name: 'Test'}
//         ]
//       });
//     }
    
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? 
//             this.setState({
//                 [name]: checked
//             })
//         :
//         this.setState({
//             [name]: value
//         }) 
//     }
    
//     render() {

//       const { cities } = this.state;

//       let citiesList = cities.length > 0
//       && cities.map((item, i) => {
//       return (
// 			<option key={i}>{item.name}</option>
// 		  )
// 	    }, this);

//       let Station
//       if (this.state.city === "Reykjavík") {
//         Station = ({ name, time, link }) => (
//           <div>
//               <p>{name}</p>
//               <p>{time}</p>
//               <p>{link}</p>
//           </div>
//         )
//       } else {
//         Station = "out"
//       }

//         return (
//             <main>
//                 <form>

//                     <br />

//                     <select 
//                         value={this.state.city} 
//                         name="city" 
//                         onChange={this.handleChange}
//                     >
//                        {citiesList}
//                     </select>

//                     <br />
//                     <br />

                    
//                 </form>
//                 <hr />
//                 <h2>Weather information:</h2>
//                 {/* <p>Your destination: {this.state.city}</p> */}
//             <div>
//                 {this.state.stations.map((station) => (
//                   <Station
//                     name={station.name}
//                     time={station.time}
//                     link={station.link}
//                     key={station.id.value}
//                   />
//                 ))}
//             </div>

//             </main>
//         )
//     }
// }

// FIN AUTRE CODE QUI MARCHE 


// CODE QUI MARCHE 

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       stations: [],
//     };

//     this.getStations = this.getStations.bind(this);
//   }

//   async getStations() {
//     const res = await fetch(`http://apis.is/weather/observations/en?stations=1`);
//     const data = await res.json();
//     return data.results;
//   }

//   async componentDidMount() {
//     const stations = await this.getStations();
//     this.setState({ stations });
//   }


//   render() {
//     const Station = ({ name, time, link }) => (
//       <div>
//           <p>{name}</p>
//           <p>{time}</p>
//           <p>{link}</p>
//       </div>
//     );
//     return (
      
//       <div>
//         {this.state.stations.map((station) => (
//           <Station
//             name={`${station.name} ${station.time} ${station.link}`}
//             key={station.id.value}
//           />
//         ))}
//       </div>
//     );
//   }
// }
// FIN CODE QUI MARCHE 


// import React, {Component} from "react"
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
