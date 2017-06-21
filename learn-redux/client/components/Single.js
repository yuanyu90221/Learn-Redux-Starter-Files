import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const {postId} = this.props.params;
        // index of the post 
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
       
        // get the post
        const post = this.props.posts[i];
        const postCommments = this.props.comments[postId] || [];
        
        return (
           <div className="single-photo">
            <Photo i={i} post={post} {...this.props} />
            <Comments postComments={postCommments} {...this.props}/>
           </div>
        );
    }
});
export default Single;