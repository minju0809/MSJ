function BasicHeader(props) { // 컴포넌트 = 사용자 정의 태그
  console.log('props', props, props.title);
  return <header>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

export default BasicHeader;