import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Icon, Button, Card, } from 'semantic-ui-react';
import CommentForm from './CommentForm';

class Comments extends React.Component {
  state = { comments: [], showForm: false }

  componentDidMount() {
    const { video_id } = this.props
    axios.get(`/api/videos/${video_id}/comments`)
      .then(res => {
        this.setState({ comments: res.data })
      })
  }

  showForm = () => this.setState({ showForm: !this.state.showForm })

  addComment = (comment) => {
    this.setState({ comments: [comment, ...this.state.comments] })
  }

  renderForm = () => {
    const { showForm } = this.state
    if (showForm)
      return (
        <CommentForm
          add
          video_id={this.props.id}
          addComment={this.addComment}
          toggle={this.showForm}
        />
      )
    return null
  }

  deleteComment = (c_id) => {
    axios.delete(`/api/videos/${this.props.id}/comments/${c_id}`)
      .then(res => {
        const comments = this.state.comments.filter(c => {
          if (c.id !== c_id)
            return c;
        })
        this.setState({ comments, });
      })
  }


  displayComments = () => {
    const { video_id } = this.props.id
    return this.state.comments.map(c => (
      <Card fluid>
        <Card.Content>
          {/* <LIKE :: DISLIKE
          /> */}
        </Card.Content>
        <Card.Content>
          <Card.Description>{c.body}</Card.Description>
          {/* <Card.Meta>{c.USERNAME}</Card.Meta> */}
          <div style={{ display: 'flex', alignSelf: 'flex-end', marginTop: '10px', width: '100px' }}>
            <Button icon color="red" onClick={() => this.deleteComment(c.id)}>
              <Icon name="trash" />
            </Button>
            {/* <Link to={{
              pathname: `/comment/${c.id}/edit`,
              state: {
                video_id: this.props.id,
              }
            }}
            >
              <Button icon color="blue">
                <Icon name="edit" />
              </Button>
            </Link> */}
          </div>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <hr />
        <h1>C O M M E N T</h1>
        <Button color='teal' onClick={this.showForm}>
          <Icon name='comment alternate outline' />
          Write a Comment
        </Button>
        {this.renderForm()}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '30px' }}>
          <Card.Group videosPerRow={3}>
            {this.displayComments()}
          </Card.Group>
        </div>
      </div>
    )
  }
}

export default Comments
