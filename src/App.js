/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
import Post from './components/Posts/Post';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';
import Comment from './components/Comments/Comment';
import dummyData from './dummy-data';
import  PostHeader from './components/Posts/PostHeader'

// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';
import Comments from './components/Comments/Comments';
import LikeSection from './components/Posts/LikeSection';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
 
  const [posts, setPosts] = useState(dummyData)
 
  
  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar />
      
      <Posts posts = {posts} />
      
      
      
    
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
