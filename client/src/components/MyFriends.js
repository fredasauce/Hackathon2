import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, Divider, Image, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const MyFriends = (props) => {
  const [friends, setFriends] = useState([])

  useEffect(()=>{
    axios.get('/api/my_friends')
    .then(res=>setFriends(res.data))
  },[])

  const ProfileCard =(props)=>(
    <Card key={props.id}>
      <Link to={{
        pathname:`/users/${props.id}`,
        state:{name:props.name, 
        image:props.image, 
        profile_id:props.id}
        }}>
      <Image src={props.image}/>
      <Card.Content>
        <Divider />
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
      </Link>
      <Button color ="yellow" icon basic onClick={()=> props.star(props.id)}>
        <Icon name="star"/>
      </Button>
      <Button color ="red" icon basic onClick={()=> props.location.downVote(props.id)}>
        <Icon name="thumbs down"/>
      </Button>
    </Card>
  )

  return(
    <>
    <h1>placeholder text</h1>
      <Card.Group itemsPerRow={4}>
        {friends.map( friend=>
        <ProfileCard key={friend.id} id={friend.id} name={friend.name} image={friend.image}/>
        )}
      </Card.Group>

    </>
  )
};

export default MyFriends;