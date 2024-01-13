import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ title, date, imageUrl, step, redirectLink }) => {
  return (
    <div className='blog_card_container'>
      <div className='blog_card_top'>
        <p className='blog_card_title'>{title}</p>
        <p className='blog_card_date'>{date}</p>
      </div>
      <div className="blog_card_lower">
        <div className='blog_card_image'>
          <img src={imageUrl} alt="Excel image" />
        </div>
        <div className='blog_card_text'>
          <p>{step}</p>
        </div>
      </div>
      <div className='blog_card_readmore'>
        <a href={redirectLink} target='_blank'>Read More</a>
      </div>
    </div>
  )
}

export default BlogCard
