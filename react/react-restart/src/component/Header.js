function Header(props) {
  console.log('props', props, props.title);
  return <header className='header'>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
    }}>{props.title}</a></h1>
  </header>
}


export default Header;