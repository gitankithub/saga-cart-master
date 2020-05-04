import React, {Component} from 'react';
import './person.css';


class Person extends Component{
    
   // const personList = 
    render(){
        // const personList = this.props.Persons.map((person, index) =>
        // <div key={person.id.toString()} className='person'>
        //     <h2>My Name is {person.name}</h2>
        //     <p>My Age is {person.Age}</p>
        // </div>
        // );

        return (
            <React.Fragment>
                {/* {personList} */}
                <div className='person'>
                    <h2>My Name is {this.props.name}</h2>
                    <p>My Age is {this.props.Age}</p>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Person;