import React from 'react';
import { MdFileDownload,MdClose,MdMenu } from "react-icons/md";
import '../../styles/Common/downloadbtn.css'

const DownloadBtn = (props) => {
  return (
    <>
      <a className='button-round download-btn' href="https://chrome.google.com/webstore/detail/wa-web-sender/klfaghfflijdgoljefdlofkoinndmpia?src=website" target="_blank">
        <p className={props.homeBtn===true ? 'home-btn download-text' : 'download-text'}>Download Now</p>
        { props.downloadIcon }
      </a> 
    </>
  )
}

export default DownloadBtn
