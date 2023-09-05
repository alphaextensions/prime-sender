import React from 'react';
import '../../styles/Common/downloadbtn.css'

const DownloadBtn = (props) => {
  return (
    <>
      <a className='button-round download-btn btn' href="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia?src=website" target="_blank">
        <p className={props.homeBtn === true ? 'download-text large-text' : 'download-text large-text'}>Download Now</p>
        {props.downloadIcon}
      </a>
    </>
  )
}

export default DownloadBtn
