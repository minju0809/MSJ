import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./Rooms";

function Router() {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    window.onpopstate = (event) => {
      setPageName(event.state);
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);
  function onClick1() {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  }
  function onClick2() {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  }

  return (
    // <BrowserRouter>
    //   <div style={{ padding: 20, border: "5px solid gray" }}>
    //     <Link to="/">홈</Link>
    //     <br />
    //     <Link to="/photo">사진</Link>
    //     <br />
    //     <Link to="/rooms">방 소개</Link>
    //     <br />
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/photo" component={Photo} />
    //     <Route exact path="/rooms" component={Rooms} />
    //   </div>

      <div>
        <button onClick={onClick1}>page1</button>
        <button onClick={onClick2}>page2</button>
        {!pageName && <Home />}
        {pageName === "page1" && <Page1 />}
        {pageName === "page2" && <Page2 />}
      </div>
    //  </BrowserRouter>
  );
}

function Home() {
  return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
}
function Photo() {
  return <h2>여기서 사진을 감상하세요</h2>;
}

function Page1() {
  return <h2>여기는 Page1입니다.</h2>;
}
function Page2() {
  return <h2>여기는 Page2입니다.</h2>;
}

export default Router;
