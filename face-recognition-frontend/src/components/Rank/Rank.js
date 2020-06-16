import React from 'react';


const Rank = ({name, entries}) => {
  return (
    <div>
      <div className='white f3'>
        {`${name},您已累计使用人脸识别技术...`}
      </div>
      <div className='white f2'>
        {`${entries} 次`}
      </div>
    </div>
   
  )
}

export default Rank;