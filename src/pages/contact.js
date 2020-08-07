import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

import "styles/pages/contact.scss"

import Toolbar from "components/Header/Toolbar/Toolbar.jsx"
import Footer from "components/Footer/Footer.jsx"
import Backdrop from "components/Backdrop/Backdrop.jsx"
import SideDrawer from "components/Header/SideDrawer/SideDrawer.jsx"

const Contact = props => {
  const { register, handleSubmit, errors } = useForm()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler = () => {
    toggleDrawer()
  }

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="page">
      <Toolbar openDrawer={toggleDrawer} page="contact" />
      {isDrawerOpen && <SideDrawer show={isDrawerOpen} />}
      {isDrawerOpen && <Backdrop click={backdropClickHandler} />}
      <main className="main">
        <div className="header">
          <h1>Reach Out!</h1>
          <p>
            Do contact me if you have internship opportunities or potential
            freelance projects. I would love to work together with you. If you
            simply wish to connect, feel free to get in touch as well.
          </p>
        </div>
        <form>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" ref={register({ required: true })} />
            {errors.name && <p>Required</p>}
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="input-container">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              ref={register({ required: true })}
            ></textarea>

            {errors.message && <p>Required</p>}
          </div>
          <Button
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </form>
      </main>
      <Footer page="contact" />
    </div>
  )
}

export default Contact
