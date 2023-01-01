const quotes = [
  {
    quote:
      "나머지 인생을 설탕물이나 팔면서 보내고 싶습니까, 아니면 세상을 바꿔놓을 기회를 갖고 싶습니까?",
    author: "스티브 잡스",
  },
  {
    quote: "기회를 찾아야 기회를 만든다.",
    author: "패티 헨슨",
  },
  {
    quote: "바삐 태어나지 않은 자는 바삐 죽는다.",
    author: "밥 딜런",
  },
  {
    quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
    author: "존 웨인",
  },
  {
    quote:
      "배움은 우연히 얻어지는 것이 아니라 열성을 다해 갈구하고 부지런히 집중해야 얻을 수 있는 것이다.",
    author: "애비게일 애덤스",
  },
  {
    quote:
      "나는 행동이 사람의 생각을 가장 훌륭하게 해석해 준다고 늘 생각해왔다.",
    author: "존 로크",
  },
  {
    quote:
      "지식을 얻으려면 공부를 해야 하고, 지혜를 얻으려면 관찰을 해야 한다.",
    author: "마릴린 보스 사번트",
  },
  {
    quote:
      "배우기만 하고 생각하지 않으면 얻는 것이 없고, 생각만 하고 배우지 않으면 위태롭다.",
    author: "공자",
  },
  {
    quote: "어떤 것을 완전히 알려거든 그것을 다른 이에게 가르쳐라.",
    author: "트라이언 에드워즈",
  },
  {
    quote: "젊음은 한때 이지만, 철없음은 영원할 수 있다.",
    author: "데이브 배리",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;
