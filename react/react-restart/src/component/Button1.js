import React from 'react';
import '../css/Button1.css';

function Button({size}) {
  if (size === 'big') {
    return <button className='button bigBtn'>큰 버튼</button>;
  } else {
    return <button className='button smallBtn'>작은 버튼</button>;
  }
}

export default Button;