import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Container, Button, Card, Grid, Image, Icon, } from 'semantic-ui-react';
import Comments from "./Comments";
import styled from "styled-components";

class Video extends React.Component {
  state = { video: [], comments: [] }
  
  
  componentDidMount() {
    const { video_id } = this.props
    axios.get(`/api/videos/${video_id}`)
      .then(res => {
        this.setState({ video: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  handleDelete = () => {
    const { id, video_id } = this.props.match.params;
    axios.delete(`/api/video/${video_id}`)
      .then(res => {
        this.props.history.push(`/video/${video_id}`)
      })
  }

  showVideos = () => {
    return this.state.videos.id(v => (
      <Card>
        <Card.Header>
          {v.title}
        </Card.Header>
        <Card.description>
          {v.description}
        </Card.description>
        <Card.Meta>
          {v.duration}
        </Card.Meta>
      </Card>
    ))
  }

  render() {
    return (
        <Page>
          <Container>
            <ButtonStyle>
              <Link to="/videos/new">
                <Button color='CAEBF2'>
                  <Icon name="add" />
                  Add a Video
                </Button>
              </Link>
            </ButtonStyle>
            <Grid>
              <Grid.Row>
                <Grid.Column relaxed columns={4}>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <div>
            {/* <Comments id={v.id} /> */}
          </div>
        </Page>
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