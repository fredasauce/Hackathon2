// import React from 'react';
// import axios from 'axios';
// import { Link, } from 'react-router-dom';
// import { Button, Container, Image, Icon, } from 'semantic-ui-react';

// class Video extends React.Component {
//   state = { comments: [] }

//   componentDidMount() {
//     const { match: { params: { id, video_id } } } = this.props
//     axios.get(`/api/videos/${video_id}/items/${id}`)
//       .then(res => {
//         this.setState({ video: res.data })
//       })
//       .catch(err => {
//         console.log(err.response)
//       })
//   }

//   handleDelete = () => {
//     const { id, department_id } = this.props.match.params;
//     axios.delete(`/api/departments/${department_id}/items/${id}`)
//       .then(res => {
//         this.props.history.push(`/departments/${department_id}`)
//       })
//   }

//   showVideos = () => {
//     return this.state.videos.map(v => (
//       <Link to={`/videos/${v.id}`}>
//         <div style={{ padding: '20px', border: '2px solid black' }}>
//           <CardStyles>
//             <Card.Header
//               style={{
//                 fontSize: "20px",
//                 height: '40px',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//               {v.name} This is video name
//             </Card.Header>
//             <Card.Content
//               style={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 }}>
//               <Image
//                 style={{
//                   height: '120px',
//                   width: '160px',
//                 }}
//                 src={"https://loremflickr.com/400/400/commerce?" + Math.random()}
//                 alt="Video" />
//             </Card.Content>
           
//           </CardStyles>
//           <Comments id={v.id} />

//         </div>
//       </Link>
//     ))
//   }

//   render() {
//     return (
//         <Page>
//           <Container>
//             <ButtonStyle>
//               <Link to="/videos/new">
//                 <Button color='CAEBF2'>
//                   <Icon name="add" />
//                   Add a Video
//                 </Button>
//               </Link>
//             </ButtonStyle>
//             <Grid>
//               <Grid.Row>
//                 <Grid.Column relaxed columns={4}>
//                   <CardGroup>
//                     {this.showVideos()}
//                   </CardGroup>
//                 </Grid.Column>
//               </Grid.Row>
//             </Grid>
//           </Container>
//         </Page>
//     )
//   }
// }

// export default Video