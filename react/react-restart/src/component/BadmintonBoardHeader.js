function BadmintonBoardHeader(props) { // 컴포넌트 = 사용자 정의 태그
  console.log('props', props, props.title);
  return <header className='header'>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
    }}>{props.title}</a></h1>
  </header>
}

export default BadmintonBoardHeader;