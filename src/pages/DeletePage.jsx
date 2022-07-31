import React from 'react'
import DeleteNote from '../components/DeleteNote/DeleteNote'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function DeletePage() {
  return (
    <div>
      <Navbar/>
      <DeleteNote/>
      <Footer/>
    </div>
  )
}

export default DeletePage
