import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  renderList = () => this.props.posts.map(post => {
    return (
      <div className="item" key={post.title}>
        
      </div>
    );
  });

  render() {
    return (
      <div>
        PostList
      </div>
    );
  }
}

const mapStateToProps = state => { 
  return {posts: state.posts }
};

export default connect(mapStateToProps)(PostList);