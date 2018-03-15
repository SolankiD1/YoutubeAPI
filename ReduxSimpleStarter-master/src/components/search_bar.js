//If it has jsx it needs the react import for it to be in scope
import React, { Component } from 'react';

//More intelligent
//Class component
//We are writing a class because we want the search_bar to have more functionality.
//React.Component classes available for use.
class SearchBar extends Component{
//New class with the name SearchBar enhance its behavior with React Componenet.
//Must have a defined render method if you are using React as a Parent.

//We're calling the parents'Component' constructor.
//this.state = object.
//we don't want it to be empty string we want it to be valid text.
constructor(props){
  super(props);
  this.state = { term: '' };
}
render(){
//OnChange property is looking for an EventHandler. JSX you wrap with{}
//Create a new input element this is a prop on change with a value of this.onInputchange

//Event Handler 2 steps
//Step1: Declare an EventHandler.
//Step2: Pass the EventHandler to the element that we want to monitor.
//We passed this event handler to the <input /> element.

//The event objected passed in the handler has the context of what happens when someone interacts with the search_bar.
//OnChange property is looking for an EventHandler. JSX you wrap with { }
//We must return jsx while using.
//this.setState informs react that the state is changing and this is what it is
  return (
      <div className="search-bar">
       <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}



//Basic component
//const SearchBar = () => {
//return <input /> //React.createElement ... the import lets us write it this way.
//}

//the only code we export is this component.  any file in our
//application that imports searchbar in index.js will get our search bar component
export default SearchBar;


//Event Handler 2 steps
//Step1: Declare an EventHandler.
//Step2: Pass the EventHandler to the element that we want to monitor.
