import React from "react";
import "../../App.css";
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { getComments, updateComment, deleteComment } from '../../utility/api';
import { useParams } from "react-router-dom";  //<---API fetch function import
// import '../../mocks/data/comments.json'
// import comments from '../../mocks/data/comments.json'
import PostComment from "./postComment";
import { Button, TextField } from "@mui/material";

function ThreadComments() {
  
  const { thread_id } = useParams()
  console.log('thread_id:', thread_id)

  //destructure props
  // const {
  //   } = props

  //define state
  const [data, setData] = useState([])
  const [editingCommentId, setEditingCommentId] = useState(null)
  const [editedContent, setEditedContent] = useState("")
  // console.log('data:', data)

  //helper functions
  // const filteredComments = comments.filter(comment => comment.thread_id === thread_id);

  //handler for the edit button
  const handleEdit = (comment_id, content) => {
    setEditingCommentId(comment_id)
    setEditedContent(content)
  }

  //handler for the save button
  const handleSave = async (comment_id) => {
    const updatedComment = {
      content: editedContent,
    };

    try {
      const response = await updateComment(thread_id, comment_id, updatedComment)
      console.log('Comment updated:', response)

      // Update the local data
      const newData = data.map((comment) =>
        comment.comment_id === comment_id ? { ...comment, ...updatedComment } : comment
      )
      setData(newData)

      // Hide the edit form
      setEditingCommentId(null)
    } catch (error) {
      console.error('Error updating comment:', error)
    }
  }

  //handler for the delete button
  const handleDelete = async (comment_id) => {
    try {
      await deleteComment(thread_id, comment_id);
      setData(data.filter((comment) => comment.comment_id !== comment_id))
    } catch (error) {
      console.error('Error deleting comment:', error)
    }
  }

  //handle for the created comment
  const handleCommentCreated = (comments) => {
    setData(comments)
  };

  // fetch the API data 
  useEffect(() => {
    if (thread_id) {
      // console.log('Fetching comments for thread_id:', thread_id);
      getComments(thread_id)
        .then((data) => {
          console.log('Received data:', data)
          if (Array.isArray(data)) {
            setData(data)
          } else {
            console.error('Error: Data received is not an array')
          }
        })
        .catch((error) => console.log(error))
    }
  }, [thread_id])
  


  //conditional rendering guard clauses
  //when cant read map even with returning an array need to return a div to give time to render
  if (!data){
    return <div>loading...</div>
  }

    //component logic
  //render a card component using .map that returns each thread title and subject as an individual card
  return (
    <Box>
      <PostComment onCommentCreated={handleCommentCreated} />
      {data.map((comment) => {
        // console.log(comment)
        return (
          <Card 
            key={comment.comment_id} 
            style={{ marginTop: '20px' }} 
            sx={{ 
              width: '70%', 
              minWidth: 275, 
              maxWidth: 900, 
              marginLeft: 'auto', 
              marginRight: 'auto' 
            }}
          >
          <CardContent>
          {editingCommentId === comment.comment_id ? (
            <TextField
              label="Comment Content"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              defaultValue={comment.content}
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <Typography variant="body2">
              {comment.content}
            </Typography>
          )}
            <CardActions>
              {editingCommentId === comment.comment_id ? (
                <>
                  <Button color="primary" onClick={() => handleSave(comment.comment_id)}>
                    Save
                  </Button>
                  <Button onClick={() => setEditingCommentId(null)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button color="primary" onClick={() => handleEdit(comment.comment_id, comment.content)}>
                  Edit
                </Button>
              )} <Button color="secondary" onClick={() => handleDelete(comment.comment_id)}>
                    Delete
                </Button>
          </CardActions>
        </CardContent>
      </Card>
    )}
    )}
  </Box>
)
}

export default ThreadComments
