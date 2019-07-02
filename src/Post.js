import React from 'react';
import User from './User';
import Comment from './Comment'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      commentsView: false,
    }
  }

  showComments = () => {
    this.setState({
      commentsView: !this.state.commentsView,
    });
  }

render () {
  return (
    <section>
      <div className="item">
        <p className="item__title">{this.props.post.title}</p>
        <p className="item__text">{this.props.post.body}</p>
        <User key={this.props.post.author.id} authorData={this.props.post.author} />
        <button className="comments__button" onClick = {this.showComments}> 
          {this.state.commentsView ?
            'Hide comments' :
            'Show comments'
          }
        </button>
      </div>
      {this.state.commentsView ?
        (
          <div className="comments">
          {this.props.post.commentData.map(item => (<Comment key={item.id} cmnt={item} />) 
      )}
    </div>) : null  
        }
  </section>
  );
}
}

export default Post;
