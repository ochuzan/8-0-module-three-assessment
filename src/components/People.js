import { Component } from "react";
import "../App.css";

class People extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            peopleData: [],
            person: null,
            // display: false
        }
    }

    componentDidMount = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                peopleData: data
            })
        })
    }

    handleUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    handleSearchPerson = (e) => {
        e.preventDefault();

        let personData = this.state.peopleData.find(person => {
            return person.name === this.state.userInput;
        })

        this.setState({
            person: personData,
            userInput: "",
            // display: !this.state.display
        })
    }



  render(){
    let notFound = <h3>Not Found</h3>;

    let Found;
      if(this.state.person){
        Found = (
            <div>
                <h3>Name: {this.state.person.name}</h3>
                <h3>Age: {this.state.person.age}</h3>
                <h3>Gender: {this.state.person.gender}</h3>
            </div>
        )
      }
      
    return (
      <div className="people">

        <h1>Search for a Person</h1>

        <form onSubmit={this.handleSearchPerson}>
            <input type="text" placeholder="Find Your Person" value={this.state.userInput} onInput={this.handleUserInput}/>
            <button type="submit">Submit</button>
        </form>

        {this.state.person === undefined ? notFound:Found}
        
      </div>
    );
  }
}

export default People;
