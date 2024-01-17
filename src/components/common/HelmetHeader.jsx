import React from 'react'
import {Helmet} from "react-helmet";
import logo from '/images/logo-img.png'

const HelmetHeader = ({ title, description, keywords}) => {
  return (
    <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="title" property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/png" href={logo} />
        <meta name="image" property="og:image" content={logo} />
        <meta name="image" content={logo} />
    </Helmet>
  )
}

export default HelmetHeader;
