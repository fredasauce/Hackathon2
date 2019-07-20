import React from "react";
import { Container, Button, Card, Grid, Image, Icon, Segment } from 'semantic-ui-react';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Comments from "./Comments";

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

  showVideos = () => {
    return this.state.videos.map(v => (
      <Link to={`/videos/${v.id}`}>

        <div style={{ padding: '10px', }}>
          <CardStyles>
            <Card.Header
              style={{
                fontSize: "16px",
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {v.name} This is video name
            </Card.Header>
            <Card.Content
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                }}>
              <Image
                style={{
                  height: '140px',
                  width: '180px',
                }}
                src={"https://loremflickr.com/400/400/commerce?" + Math.random()}
                alt="Video" />
            </Card.Content>
          </CardStyles>
          {/* <Comments id={v.id} /> */}

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


           <StyledSeg>
              <StyledLeftDiv>
                ----BIG VIDEO---/route and action needed/
              </StyledLeftDiv>
           </StyledSeg>


            <StyledSeg>
              <StyledRightDiv>
                smaller grid render here
              </StyledRightDiv>
            </StyledSeg>
      
             
            <StyledSeg>
            <Grid>
              <Grid.Row>
                <Grid.Column relaxed columns={4}>
                  <CardGroup>
                    {this.showVideos()}
                  </CardGroup>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            </StyledSeg>
          </Container>
        </Page>
    )
  }
}

const StyledRightDiv = styled.div`
  width: 100%;
  float: right;
  padding: 1em 1em 1em 2em;

`;

const StyledLeftDiv = styled.div`
  width: 50%;
  float: left;
  padding: 1em 1em 1em 1em;
`;
const StyledBottomDiv = styled.div`
  float: bottom;
`;


const StyledSeg = styled(Segment)`
   border-radius: 1px ;
   border: 2px ;
   display: inline-block;
   background-color: transparent ;
   padding: 1em ;
   font-size: 1em ;
   box-shadow: none ;
   margin:1em auto ;
 `;
const CardStyles = styled(Card)`
  height: 200px;
  width: 180px;
`

const CardGroup = styled(Card.Group)`
  padding: 5px;
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














// const Videos = () => {
//   const {videos, setVideos} = useState([]);

//  const handleSubmit = (e) => {
//     e.preventDefault()
//       axios.put(`/api/video/${id}`)
//         .then(res => setVideos(res.data))
//     debugger

//   }

//   const handleClick = () => {
//     debugger
//   }

//   const Video =()=>{
//     return(
//     <Card>
//       <Card.Header>
//         {/* {v.title} */}
//         a
//       </Card.Header>
//       <Card.description>
//         {/* {v.description} */}
//         b
//       </Card.description>
//       <Card.Meta>
//         {/* {v.comments} */}
//         c
//       </Card.Meta>
//       <Button onClick={handleSubmit} />
//     </Card>
//     )
//   }

//   return(
//     <>
//     HALLO
//     {videos.map((video)=>
//       <Video key={video.id} />
//       )}
//     </>
//   )
// }
