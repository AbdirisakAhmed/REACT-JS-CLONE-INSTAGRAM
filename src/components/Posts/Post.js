import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';


const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post } = props;
  
  // This is the state for the likes, if you pass the state correctly, the heart button should increase the likes
  
    const [likes, setLikes] = useState(post.likes);
    const [comments, setComments] = useState(post.comments)
    const [postHeader, setPostHeader ] = useState(post.thumbnailUrl)
    const [myPost, setMyPost] = useState(post.username)
  
 // Function to increase the number of likes
  
  const incrementLikes = props => {
   
    setLikes(likes + 1);
    
  };
  

  return (
    <div className='post-border'>
      <PostHeader thumbnailUrl={postHeader} username={myPost} />
      
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />

      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection numberOfLikes={likes} incrementLikes={incrementLikes} />
     
      {/* Comments also wants its props! */}
      <Comments  comments={comments} />
    </div>
  );
};

export default Post;
