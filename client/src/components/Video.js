
import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Image, Icon, Segment, Header, Divider, } from 'semantic-ui-react';
import Comments from "./Comments";
import styled from "styled-components";

class Video extends React.Component {
  state = { video: [], }
  
  
  componentDidMount(id) {
    const video_id = this.props.match.params.id
    axios.get(`/api/videos/${video_id}`)
      .then(res => {
        this.setState({ video: res.data })
      })

    // axios.get(`/api/videos/${video_id}/comments`)
    //   .then ((res) => {
    //     this.setState({ comments: res.data })
    //   })
      .catch(err => {
        console.log(err.response)
      })
  }

  // handleDelete = () => {
  //   const { id, video_id } = this.props.match.params;
  //   axios.delete(`/api/video/${video_id}`)
  //     .then(res => {
  //       this.props.history.push(`/video/${video_id}`)
  //     })
  // }

  render() {
    const { match: { params: {video_id}}} = this.props
    const { video } = this.state
    return (
      <>
        <div>
          <Image src={"https://loremflickr.com/400/400/products?" + Math.random()} alt="Trailer" />
          {video.duration}
        </div>
        <Segment raised>
          <Header as="h2" textAlign="left" style={{padding: '15px 0'}}>{video.title}</Header>
          <Divider />
          {/* {video.user_id} */}
          {video.description}
        </Segment>
        <Comments id={video_id} />
      </>
    )
  }
}

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export default Video