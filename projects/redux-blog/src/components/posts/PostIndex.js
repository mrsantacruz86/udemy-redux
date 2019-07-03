import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
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
          {this.renderAdmin(post)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/posts/${post.id}`} className="header">
              {post.title}
            </Link>
            <div className="description">{post.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <div className="ui celled list">{this.renderList()}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/posts/new" className="ui button primary">
            Create Post
          </Link>
        </div>
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
