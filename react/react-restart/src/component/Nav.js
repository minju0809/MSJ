function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
        console.log(event.target.id);
      }}>{t.title}</a>
    </li>)
  }
  return <nav className='nav'>
    <ol>
      {lis}
    </ol>
  </nav>
}

export default Nav;