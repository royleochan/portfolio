import React from "react"

import "./index.scss"

import InstagramIcon from "@ant-design/icons/InstagramOutlined"
import FacebookIcon from "@ant-design/icons/FacebookOutlined"
import LinkedInIcon from "@ant-design/icons/LinkedinOutlined"

const Footer = props => {
  const clickHandler = url => {
    window.open(url, "_blank")
  }

  return (
    <div className="footer">
      <footer>
        <div className="icon-container">
          <InstagramIcon
            className="icon"
            onClick={() => clickHandler("https://www.instagram.com/leoroyy/")}
          />
          <FacebookIcon
            className="icon"
            onClick={() => clickHandler("https://www.facebook.com/royXDXD")}
          />
          <LinkedInIcon
            className="icon"
            onClick={() =>
              clickHandler("https://www.linkedin.com/in/roy-chan-579124176/")
            }
          />
        </div>
      </footer>
    </div>
  )
}

export default Footer
