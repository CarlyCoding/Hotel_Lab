import './App.css';
import React, { useState, useEffect } from 'react'
import { getBookings } from './HotelService';
import BookingsForm from './FormComponent';

function App() {
  return (
    <>
      <BookingsForm/>
    </>
  );
}

export default App;