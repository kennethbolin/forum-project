import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react'; // <--use when fetching from the API
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../mocks/data/thread.json'
import { getThread, deleteThread, updateThread } from '../../utility/api';  // <---API fetch function import
import PostForm from './postForm';
import { TextField } from '@mui/material';



function ThreadCard() {

  //set states
  const [data, setData] = useState([]);
  const [editingThreadId, setEditingThreadId] = useState(null);
  const [editTitle, setEditTitle] = useState("")
  const [editSubject, setEditSubject] = useState("")

  //use any helper functions
  //need a function to be able to submit a delete request to the API to remove a post
  const handleDelete = async (thread_id) => {
    const result = await deleteThread(thread_id)
    setData(result.data)
  };

  //need a function to be able to handle the edit button the be able to send a put request to the API
  const handleEdit = (thread_id, title, subject) => {
    setEditingThreadId(thread_id)
    setEditTitle(title)
    setEditSubject(subject)
  };

  //function to handle the save button on click
  const handleSave = async (thread_id) => {
    const updatedThread = {
      title: editTitle,
      subject: editSubject,
    };
  
    try {
      const response = await updateThread(thread_id, updatedThread)
      console.log("Thread updated:", response)
  
      // Update the local data
      const newData = data.map((thread) =>
        thread.thread_id === thread_id ? { ...thread, ...updatedThread } : thread
      );
      setData(newData)
  
      // Hide the edit form
      setEditingThreadId(null)
    } catch (error) {
      console.error("Error updating thread:", error)
    }
  };
    //handle for the created thread
  const handleThreadCreated = (threads) => {
    setData(threads)
  };

  //close the editing box after clicking save
  

  
  // const {
  //DESTRUCTURE PROPS 
  // } = props


  // fetch the API data
  useEffect(() => {
    getThread()
      .then(data => setData(data))
      .catch((error) => console.log(error))
  }, [])


  //conditional rendering guard clauses
  //when cant read map even with returning an array need to return a div to give time to render
  if (!data){
    return <div>loading...</div>
  }


  //component logic
  //import the the new post component
  //render a card component using .map that returns each thread title and subject as an individual card
  //have links in the title to route to the comments page for that thread
  //delete button
  //edit button
  return (
    <Box sx={{ paddingTop: "20px" }}>
      <PostForm onThreadCreated={handleThreadCreated}/>
      {data.map((thread) => (
        <Card 
          key={thread.thread_id} 
          style={{ marginTop: "20px", marginBottom: '20px' }}
          sx={{ width: '70%', 
            minWidth: 275, 
            maxWidth: 900, 
            marginLeft: 'auto', 
            marginRight: 'auto' }}>
          <CardContent>
            {editingThreadId === thread.thread_id ? (
              <>
                <TextField
                  label="Post Title"
                  variant="outlined"
                  fullWidth
                  required
                  defaultValue={thread.title}
                  onChange={(e) => setEditTitle(e.target.value)}
                  inputProps={{ maxLength: 300 }}
                  sx={{ mb: "10px" }}
                />
                <TextField
                  label="Post Subject"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  defaultValue={thread.subject}
                  onChange={(e) => setEditSubject(e.target.value)}
                />
              </>
            ) : (
              <>
                <CardActions>
                  <Link
                    to={{
                      pathname: `/thread/${thread.thread_id}/comments`,
                      state: { thread_id: thread.thread_id },
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    <Button>{thread.title}</Button>
                  </Link>
                </CardActions>
                <Typography variant="body2">{thread.subject}</Typography>
              </>
            )}
            <CardActions>
              {editingThreadId === thread.thread_id ? (
                <>
                  <Button color="primary" onClick={() => handleSave(thread.thread_id)}>
                    Save
                  </Button>
                  <Button onClick={() => setEditingThreadId(null)}>Cancel</Button>
                </>
              ) : (
                  <Button color="primary" onClick={() => handleEdit(thread.thread_id, thread.title, thread.subject)}>
                    Edit
                  </Button>
              )}
              <Button color="secondary" onClick={() => handleDelete(thread.thread_id)}>
                Delete
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}


export default ThreadCard