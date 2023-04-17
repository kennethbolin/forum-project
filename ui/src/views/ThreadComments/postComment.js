import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { createComment } from "../../utility/api";



function PostComment() {

  //Set sates
  const [postContent, setPostContent] = useState("")

  //helper functions
  //need to handle the submit button to send the subject and title data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { content: postContent }
    console.log(data)
    try{    
      await createComment(data)
      setPostContent('')
    } catch (error) {
        console.error('Error creating comment:', error)
      }
  }

  //return a form post component that has a title and subject feild.
  //title must be filled out but subject can be left blank
  return (
    <Box sx={{ width: "50%", margin: "0 auto", textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          comment:
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="What say 'ye?"
          variant="outlined"
          fullWidth
          required
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          inputProps={{ maxLength: 300 }}
          sx={{ mb: '10px' }}
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
  
  export default PostComment;