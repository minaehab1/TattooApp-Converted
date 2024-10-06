'use client'

import React from 'react'

const BookingForm = () => {
  return (
    <form className="mt-4">
      <div className="mb-4">
        <label htmlFor="date" className="block mb-2">Date</label>
        <input type="date" id="date" name="date" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block mb-2">Time</label>
        <input type="time" id="time" name="time" className="w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Book Appointment
      </button>
    </form>
  )
}

export default BookingForm