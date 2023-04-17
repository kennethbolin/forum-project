import React from "react";
import "../../App.css";
import { Container, Box, Typography, Card, CardMedia } from "@mui/material";

function Home() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Card>
          <CardMedia
            sx={{height: 200}}
            image="../../assests/trivia_image.jpg"
            title="logo">
          </CardMedia>
        </Card>
        <Typography variant="h5" component="h2" gutterBottom>
          A platform to empower AT&T employees
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the AT&T Union Forum! This online community is dedicated to providing a safe and inclusive space for AT&T employees to connect, share knowledge, and support one another. Our goal is to create an open and transparent platform where employees can discuss workplace challenges, celebrate achievements, and collaborate on ways to improve our working environment. Together, we can make AT&T a better place to work.
        </Typography>
        <Typography variant="h6" component="h3" gutterBottom>
          Key Features:
        </Typography>
        <Typography variant="body1" gutterBottom>
          1. Discussion Boards: Engage with fellow employees on a wide range of topics, from workplace policies and career development to union initiatives and AT&T news.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. Resources:
          / Add more content here
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;