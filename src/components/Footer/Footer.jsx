import React from "react"

import "./index.scss"

import InstagramIcon from "@ant-design/icons/InstagramOutlined"
import FacebookIcon from "@ant-design/icons/FacebookOutlined"
import LinkedInIcon from "@ant-design/icons/LinkedinOutlined"
import GithubIcon from "@ant-design/icons/GithubOutlined"

const Footer = props => {
  const { page } = props

  const clickHandler = url => {
    window.open(url, "_blank")
  }

  return (
    <div className="footer">
      <footer>
        <div className="icon-container">
          <GithubIcon
            className={`icon-${page}`}
            onClick={() => clickHandler("https://github.com/royleochan")}
          />
          <LinkedInIcon
            className={`icon-${page}`}
            onClick={() =>
              clickHandler("https://www.linkedin.com/in/roy-chan-579124176/")
            }
          />
          <InstagramIcon
            className={`icon-${page}`}
            onClick={() => clickHandler("https://www.instagram.com/leoroyy/")}
          />
          <FacebookIcon
            className={`icon-${page}`}
            onClick={() => clickHandler("https://www.facebook.com/royXDXD")}
          />
        </div>
      </footer>
    </div>
  )
}

export default Footer
