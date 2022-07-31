import React from 'react'
import CreateNote from '../components/CreateNote/CreateNote'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

function CreatePage() {
  return (
    <div>
      <Navbar/>
      <CreateNote/>
      <Footer/>
    </div>
  )
}

export default CreatePage
