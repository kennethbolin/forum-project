import React from "react";
import Calendar from 'react-calendar'
import { useState } from "react";
// import './calendar.css'
import { Box, Card } from "@mui/material";
import 'react-calendar/dist/Calendar.css'

function EventPage() {
  const [value, onChange] = useState(new Date());

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <div>
        <Calendar onChange={onChange} value={value}/>
        <Card>Testing Day</Card>
      </div>
    </Box>
  );
}

export default EventPage;
