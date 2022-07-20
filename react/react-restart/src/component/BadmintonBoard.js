import React, {useState} from 'react';
import BadmintonBoardHeader from './BadmintonBoardHeader';
import BadmintonBoardArticle from './BadmintonBoardArticle';
import BadmintonBoardNav from './BadmintonBoardNav';

function BadmintonBoard() {
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
    content = <BadmintonBoardArticle title='대회설정' body='대회'></BadmintonBoardArticle>
  } else {
    let title, body = null;
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <BadmintonBoardArticle title={title} body={body}></BadmintonBoardArticle>
  }

  return (
    <div>
      <BadmintonBoardHeader title="Mincho"></BadmintonBoardHeader>
      <div className='nav_article'>
        <BadmintonBoardNav 
        topics={topics} onChangeMode={(_id) => {
          setMode();
          setId(_id);
        }}
        ></BadmintonBoardNav>
        {content}
      </div>
    </div>
  );
}

export default BadmintonBoard;