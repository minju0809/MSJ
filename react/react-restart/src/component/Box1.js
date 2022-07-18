import React from 'react';
import '../css/Box1.css';

function Box({size}) {
  if (size === 'big') {
    return <div className='box bigBox'>큰 박스</div>;
  } else {
    return <div className='box smallBox'>작은 박스</div>;
  }
}

export default Box;