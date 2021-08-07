import React from 'react';
import './Comments.css';
import Comment from './Comment';


const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(singleComment =>(
         <Comment comment = {singleComment} />
      )
        
      )}
     
       
    </div>
    
  );
};

export default Comments;
