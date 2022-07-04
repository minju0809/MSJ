var quotes = [];
quotes[0] = "당신은 지금도, 이전에도, 앞으로도 최고이다.";
quotes[1] = "성공하는 사람은 실패하는데 익숙한 사람이다.";
quotes[2] = "후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶을 산다는 것이다.";
quotes[3] = "성공이라는 못을 박으려면 끈질김이라는 망치가 필요하다.";
quotes[4] = "인생이란 결코 공평하지 않다. 이 사실에 익숙해져라.";
quotes[5] = "'언젠가'라는 날은 영원히 오지 않는다.";
quotes[6] = "자존심은 어리석은 자의 소유물이다.";

var index = Math.floor(Math.random() * 7);
document.write("<p>&quot;" + quotes[index] + "&quot;</p>")
