import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Form} from 'semantic-ui-react'

const AddVideo = () => {
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState('')
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')
  const [trailer, setTrailer] = useState('')
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`/api/videos`,{title, duration, genre, description, trailer})
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
      label='title'
      placeholder='title'
      name='title'
      onChange={(e)=>setTitle(e.target.value)}
      required
      />
      <Form.Input
      label='duration'
      placeholder='duration'
      name='duration'
      onChange={(e)=>setDuration(e.target.value)}
      required
      />
      <Form.Input
      label='genre'
      placeholder='genre'
      name='genre'
      onChange={(e)=>setGenre(e.target.value)}
      required
      />
      <Form.Input
      label='description'
      placeholder='description'
      name='description'
      onChange={(e)=>setDescription(e.target.value)}
      required
      />
      <Form.Input
      label='trailer'
      placeholder='trailer'
      name='trailer'
      onChange={(e)=>setTrailer(e.target.value)}
      required
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  )
  
};

export default AddVideo;