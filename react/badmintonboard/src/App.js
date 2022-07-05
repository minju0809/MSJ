import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Header(props) {
  console.log('props', props, props.title);
  return <header className='header'>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault();
    }}>{props.title}</a></h1>
  </header>
}

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

function Article(props) {
  return <article className='article'>
    <h1>{props.title}</h1>
    {props.body}
  </article>
}

function App() {
  const [mode, setMode] = useState('대회설정');
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, title: '대회설정', body: '대회'},
    { id: 2, title: '선수등록', body: '선수'},
    { id: 3, title: '종목관리', body: '종목'},
    { id: 4, title: '대진표생성', body: '대진표생성'},
    { id: 5, title: '시간표생성', body: '시간표생성'},
    { id: 6, title: '선수수정', body: '수정'},
    { id: 7, title: '대회대진표', body: '대회대진표'},
    { id: 8, title: '경기진행', body: '경기'},
    { id: 9, title: '오더지출력', body: '오더지'},
    { id: 10, title: '대회종합현황', body: '현황'},
    { id: 11, title: '경품권출력', body: '경품권'},
    { id: 12, title: '종합성적', body: '성적'},
    { id: 13, title: '입상자명단', body: '명단'},
    { id: 14, title: '수령증출력', body: '수령증'},
    { id: 15, title: '환경설정', body: '환경설정'}
  ]);
  let content = null;
  if (mode === '대회설정') {
    content = <Article title='대회설정' body='대회'></Article>
  } else {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div className="App">
      <Header title="Mincho"></Header>
      <div className='nav_article'>
        <Nav 
        topics={topics} onChangeMode={(_id) => {
          setMode();
          setId(_id);
          console.log('ㅜㅜ', _id);
        }}
        ></Nav>
        {content}
      </div>
    </div>
  );
}

export default App;

// function Nav(props) {
//   for (let i = 0; i < props.topics.length; i++) {
//     let t = props.topics[i];
//     return <nav className='nav'>
//       <ol>대회관리
//         <li key={t.id}>대회설정</li>
//         <li key={t.id}>선수등록</li>
//         <li key={t.id}>종목관리</li>
//       </ol>
//       <ol>대회준비
//         <li key={t.id}>대신표생성</li>
//         <li key={t.id}>시간표생성</li>
//       </ol>
//       <ol>대회진행
//         <li key={t.id}>선수수정</li>
//         <li key={t.id}>대회대진표</li>
//         <li key={t.id}>경기진행</li>
//         <li key={t.id}>오더지출력</li>
//         <li key={t.id}>대회종합현황</li>
//         <li key={t.id}>경품권출력</li>
//       </ol>
//       <ol>경기결과
//         <li key={t.id}>종합성적</li>
//         <li key={t.id}>입상자명단</li>
//         <li key={t.id}>수령증출력</li>
//       </ol>
//       <ol>환경설정
//         <li key={t.id}>환경설정</li>
//       </ol>
//     </nav>
//   }
// }

// function Body(props) {
//   return <div className='body'>
//     <h1><a href='/' onClick={(event) => {
//       event.preventDefault();
//     }}>Body</a></h1>
//   </div>
// }

// function App() {
//   const [mode, setMode] = useState('대회설정');
//   const [id, setId] = useState(null);
//   const [topics, setTopics] = useState([
//     { id: 1, title: '대회설정' },
//     { id: 2, title: '선수등록' },
//     { id: 3, title: '종목관리' },
//     { id: 4, title: '대진표생성' },
//     { id: 5, title: '시간표생성' },
//     { id: 6, title: '선수수정' },
//     { id: 7, title: '대회대진표' },
//     { id: 8, title: '경기진행' },
//     { id: 9, title: '오더지출력' },
//     { id: 10, title: '대회종합현황' },
//     { id: 11, title: '경품권출력' },
//     { id: 12, title: '종합성적' },
//     { id: 13, title: '입상자명단' },
//     { id: 14, title: '수령증출력' },
//     { id: 15, title: '환경설정' }
//     // <ol>대회관리
//     // </ol>
//     // <ol>대회준비
//     // </ol>
//     // <ol>대회진행
//     // </ol>
//     // <ol>경기결과
//     // </ol>
//     // <ol>환경설정
//     // </ol>
//   ]);

//   return (
//     <div className="App">
//       <Header></Header>
//       <div className='nav_body'>
//         <Nav></Nav>
//         <Body onChageMode={(_id) => {
//           console.log(_id);
//           setId(_id);
//         }}></Body>
//       </div>
//     </div>
//   );
// }

// export default App;


