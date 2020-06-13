import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>
          退出
        </p>
    </nav>
    )
  } else {
    return (
      <nav style={{display: 'flex', justifyContent:'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>
          登录
        </p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>
          注册
        </p>
    </nav>
    )
  }
}

export default Navigation;