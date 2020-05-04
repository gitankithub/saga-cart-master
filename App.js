import React, { Component, Fragment } from 'react';
import './App.css';
import Person from './Person';

// const App = (props) => (
//   <React.Fragment>
//     <h2> Welcome to react World {props.year}!</h2>
//   </React.Fragment>
// )

class App extends Component{
  state = {
    title : 'React',
    value : '',
    show : false,
    persons: [
      {
        name: 'Ankit',
        Age: 28,
        id: 1
      },
      {
        name: 'Amrit',
        Age: 30,
        id: 2
      },
      {
        name: 'Rahul',
        Age: 25,
        id: 3
      },
      {
        name: 'Rini',
        Age: 24,
        id: 4
      }
    ]
  };

 conditionalJSX = () =>{
    if(this.state.show){
      return <h2>Appear Only if show is true!</h2>
    }  
    return;
 }

  constructor(props){
    super(props);
    console.log('Constructor called.');
    this.handleChange = this.handleChange.bind(this);
  }
  static getDerivedStateFromProps(props,state){
    console.log('props derived called', state);
    return state;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // componentWillMount(){
  //   this.setState({
  //     title: this.state.title + 'JS'
  //   });
  // }

  componentDidMount(){
    setTimeout(function() {
      this.setState({title: 'reactjs', show : true})
    }.bind(this), 4000);
  }

  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called!");
    return true;
  }

  // componentWillUpdate(){
  //   console.log('componentWillUpdate called');
  // }

  componentDidUpdate(prevProps, prevState, snapShot){
    //this.setState({title: snapShot.title})
    console.log('componentDidUpdate called');
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate called!", prevState, prevProps);
    return prevState;
  }
 
  render () {
    console.log('render');
    return (
      <Fragment>
        <input type='text' name='year'  value={this.state.value} 
        onChange={this.handleChange}/>
        <h2> Welcome to {this.state.title} World {this.props.year}!</h2>
        {this.conditionalJSX()}
        {this.state.show || 
                  <h2>Another way to Appear Only if show is true!</h2>
        }
        {/* <Person Persons={this.state.persons}/> */}
        {
          this.state.persons.map(person =>(
            <Person key={person.id} name={person.name} age={person.age}/>
            )
        )}
      </Fragment>
    )
  }
}

export default App;
