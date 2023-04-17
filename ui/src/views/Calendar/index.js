import React from "react";
import Calendar from 'react-calendar'
import { useState } from "react";
import './calendar.css'
import { Box } from "@mui/material";

function EventPage() {
  const [value, onChange] = useState(new Date());

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      <div>
        <Calendar onChange={onChange} value={value}/>
      </div>
    </Box>
  );
}

export default EventPage;
