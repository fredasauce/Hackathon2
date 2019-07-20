import React from "react";
import { Form, } from "semantic-ui-react";
import axios from "axios";

class CommentForm extends React.Component {
  state = { body: '', like: null  }

  componentDidMount() {
      if (this.props.edit) {
      axios.get(`/api/videos/${this.props.location.state.video_id}/comments/${this.props.match.params.id}`)
        .then(res => {
          this.setState({ ...res.data })
        })
      }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.edit) {
      const { match: { params: { id } } } = this.props
      const { location: { state: { video_id } } } = this.props
      axios.put(`/api/videos/${video_id}/comments/${id}`, { ...this.state })
        .then(res => {
          this.props.history.goBack()
        })
    } else {
      const { video_id } = this.props
      axios.post(`/api/videos/${video_id}/comments`, { ...this.state })
        .then(res => this.props.addComment(res.data))
      this.props.toggle()
    }
  }

  render() {
    const { body, like, } = this.state
    return (
      <div style={{marginLeft: '100px'}}>
        {!this.props.add ? <h1>Edit Comment</h1> : null}
        <Form style={{ marginTop: '10px' }} onSubmit={this.handleSubmit}>
          <Form.Group width="equal">
            />
            <Form.Input
              name="body"
              label="Body"
              placeholder="Body"
              required
              value={body}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color='green'>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default CommentForm;