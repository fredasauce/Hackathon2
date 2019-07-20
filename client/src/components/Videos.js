import React from "react";
import { Container, Button, Card, Grid, Image, Icon, } from 'semantic-ui-react';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Comments from "./Comments";
import AddVideo from './AddVideo'
import axios from "axios"

class Videos extends React.Component {
  state = { videos: [], }

  componentDidMount() {
    axios.get("/api/videos")
      .then(res => {
        this.setState({ videos: res.data })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  randomVideo=()=>{
    return(
      <>
      {this.state.videos[Math.floor(Math.random(0, this.state.videos.length-1))]}
      </>
    )
  }

  showVideos = () => {
    return this.state.videos.map(v => (
      <Link to={`/videos/${v.id}`}>
        <div style={{ padding: '20px', border: '2px solid black' }}>
          <CardStyles>
            <Card.Header
              style={{
                fontSize: "20px",
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {v.title}
            </Card.Header>
            <Card.Content
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
              <Image
                style={{
                  height: '120px',
                  width: '160px',
                }}
                src={"https://loremflickr.com/400/400/commerce?" + Math.random()}
                alt="Video" />
            </Card.Content>
           
          </CardStyles>
          <Comments id={v.id} />

        </div>
      </Link>
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
                  <CardGroup>
                    {this.showVideos()}
                  </CardGroup>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        <AddVideo/>
        </Page>
    )
  }
}

const CardStyles = styled(Card)`
  height: 200px;
  width: 180px;
`

const CardGroup = styled(Card.Group)`
  padding: 40px;
  display: flex;
  justify-content: center;
`
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

  export default Videos;