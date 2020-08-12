import React, { useState } from "react"
import { navigate } from "gatsby-link"
import { useForm } from "react-hook-form"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"

import "styles/pages/contact.scss"

import Toolbar from "components/Header/Toolbar/Toolbar.jsx"
import Footer from "components/Footer/Footer.jsx"
import Backdrop from "components/Backdrop/Backdrop.jsx"
import SideDrawer from "components/Header/SideDrawer/SideDrawer.jsx"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = props => {
  const { register, handleSubmit, errors } = useForm()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [state, setState] = useState({})

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const backdropClickHandler = () => {
    toggleDrawer()
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    console.log(e)
    console.log(state)
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="contact-page">
      <Toolbar openDrawer={toggleDrawer} page="contact" />
      {<SideDrawer show={isDrawerOpen} />}
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
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              ref={register({ required: true })}
              onChange={handleChange}
            />
            {errors.name && <p>Required</p>}
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              onChange={handleChange}
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
              onChange={handleChange}
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
      <Footer />
    </div>
  )
}

export default Contact
