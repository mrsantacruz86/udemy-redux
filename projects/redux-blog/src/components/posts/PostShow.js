import React from "react";
import { connect } from "react-redux";
import { fetchPost, deletePost } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick = () => {
    const { id } = this.props.match.params;
    this.props.deletePost(id);
  };

  render() {
    if (!this.props.post) {
      return <div>Loading post...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div>
        <h2>{title}</h2>
        <h4>{categories}</h4>
        <p>{content}</p>
        <button className="ui button negative" onClick={this.onDeleteClick}>
          Delete Post
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(StreamShow);
