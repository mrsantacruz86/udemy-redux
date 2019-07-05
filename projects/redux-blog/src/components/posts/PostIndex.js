import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderButtons(post) {
    if (post.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/posts/delete/${post.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          {this.renderButtons(post)}
          <i className="large middle alligned icon user" />
          <div className="content">
            <h3 className="header">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <div className="description">{post.content}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <div style={{ textAlign: "right" }}>
          <Link to="/posts/new" className="ui button primary">
            Add a Post
          </Link>
        </div>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts)
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(StreamList);
