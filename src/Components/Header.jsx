import React from 'react'
import JoinBtn from './JoinBtn'

const Header = () => {
  return (
    <>
        <div className="heading">
            <div className="logo">
            <img src="/Assets/melotribe.png" alt="" className="logoimg" />
            </div>
            <div className="menu">
                <JoinBtn />
            </div>
        </div>
    </>
  )
}

export default Header