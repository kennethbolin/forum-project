import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { createThread } from "../../utility/api";



function PostForm(props) {

  const {
    onThreadCreated
  } = props

  //Set sates
  const [postTitle, setPostTitle] = useState("")
  const [postSubject, setPostSubject] = useState("")
  //const [file, setFile] = useState(null); <--for possibly adding a photo

  //helper functions
  //need to handle the submit button to send the subject and title data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { title: postTitle, subject: postSubject }
    console.log(data);
    try {
      const threads = await createThread(data)
      onThreadCreated(threads)
      setPostTitle('')
      setPostSubject('')
    } catch (error) {
      console.error('Error creating thread:', error)
    }
  }

  //return a form post component that has a title and subject feild.
  //title must be filled out but subject can be left blank
  return (
    <Box sx={{ width: "50%", margin: "0 auto", textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
          Create a new post:
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Post Title"
          variant="outlined"
          fullWidth
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          inputProps={{ maxLength: 300 }}
          sx={{ mb: '10px' }}
        />
        <TextField
          label="Post Subject"
          variant="outlined"
          fullWidth
          multiline
          rows={5}
          value={postSubject}
          onChange={(e) => setPostSubject(e.target.value)}
        />
          {/* <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginTop: "10px" }}
          /> */} {/* include a photo with the post */}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: "10px" }}
        >
          Submit
        </Button>
      </form>
    </Box>
  )
}
  
export default PostForm;