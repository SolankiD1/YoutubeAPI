//installed modules
//JSX now knows that it has access to the modules file that has the rendering function.
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';//if we created the component we need to tell them the path
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//this will let us use the YouTube API
const API_KEY = 'AIzaSyC07zgf0_qkjlrXOI2i70Lllb1VE3MOIBo';
//we are going to npm The Youtube API now its in our package.json
//create a new component. this component should produce some HTML below is ES6 JavaScript
//ReactDom will render the page
//you can have may instances of app so its like a class .. this is a factory of the actual component.
//we passed app as the class to react dom not an instance you need to make an instance
//and then pass it in to the react
//to create a instance its easy to do it
//downwards data flow we want the most parent component and that would be index all other
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('New York Rangers Game 7')
}

videoSearch(term){
  YTSearch({key: API_KEY, term}, (videos) =>{
    this.setState({
      videos:videos,
      selectedVideo:videos[0]
      });
});
}

render(){
  const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 200);
  return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
      </div>
  );
 }
}

//Take this component's generated HTML and put it on the page(in the DOM);
//JSX tags make an instance and passes it into React.render();
//React please take this Component's generated HTML and put it in the DOM
//lecture error and fix cycle.
//takes 2 parameters we need an existing HTML file and target a location to drop the data
//aka the app instances. the div on the HTML will be the top level of the tree.
React.render(<App />, document.querySelector('.container'));
