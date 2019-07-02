import React from 'react';
import PostList from './PostList';
import './App.css';
import { getPost, getUser, getComment } from './api';

class App extends React.Component {
  constructor(props) {
    super (props);
  
    this.state = {
      isLoaded: false,
      posts: [],
      buttonText: 'Load',
     }
  }
  
  loadData = async () => {
    const posts = await getPost();  
    const users = await getUser(); 
    const comments = await getComment(); 
    
    this.setState({
      buttonText: 'Loading...',
    })

    setTimeout(() =>(
      this.setState({
        posts: this.getPosts(posts, users, comments),
        isLoaded: true,
      })
    ), 1000);    
  }
  
  getPosts(posts, users, comments) {
    return posts.map(item => ({
              ...item,
              author: users.find(user => item.userId === user.id),
              commentData: comments.filter(comnt => item.id === comnt.postId),
             })
            );
  }

render() {
  const { posts, isLoaded } = this.state;
  return (
    <div className="App">
      { isLoaded ? (
        <PostList items={posts} />
      ) : (
        <button className="loading_button" onClick={this.loadData}>{this.state.buttonText}</button>
      )}
    </div>
  );
 }
}

export default App;
