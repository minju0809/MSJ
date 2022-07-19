function BadmintonBoardArticle(props) {
  return <article className='article'>
    <h1>{props.title}</h1>
    {props.body}
  </article>
}

export default BadmintonBoardArticle;