# _202030215 서민석_

## _11월 27일_

### Github.io

- github.io 작성 코드 및 출력 화면

<img src="image-3.png" width="80%" height="40%"/>

## _11월 20일_

### use client

```
서버 컴포넌트와 클라이언트 컴포넌트를 구분하기 위해 사용
```

- 서버에서 렌더링하도록 설계되어, 클라이언트에서만 필요한 컴포넌트를 명시적으로 지정해야 할 필요가 있음.
- `use client`를 컴포넌트 상단에 선언하면 해당 컴포넌트는 클라이언트에서만 렌더링되며, 주로 상태 관리나 브라우저 전용 API 사용이 필요한 경우에 사용됨

---

### Context API와 Redux

#### Context API

```
React에서 기본으로 제공하는 상태 관리 도구로, 외부 라이브러리 설치 없이 사용 가능

Context API는 주로 전역 상태를 관리하는데 사용됨
```

- Context API의 장점
  - 간단하고 가벼움.
  - 간단한 구조로 인해 설정과 사용이 간편함.
  - 컴포넌트 트리의 깊이 제한 X
- Context API의 단점
  - 상태가 복잡하거나 다양학 액션을 통해 변경이 이루어져야 하는 경우, 관리가 어려워질 수도 있음.
  - 상태가 업데이트되면 해당 상태를 사용하는 모든 하위 컴포넌트가 다시 렌더링되므로, 상태 범위가 넓을 경우 성능에 영향을 미칠 수 있음.

#### Redux

```
Redux는 전역 상태를 관리하기 위한 독립적인 state 관리 라이브러리

상태의 변경을 예측 가능하게 하고, 전역 state 관리를 더 구조적으로 지원함.

store, reducer, action 등의 개념을 사용해 state와 state dispatch를 관리
```

- Redux의 장점

  - 명확한 상태 관리 구조 / `state dispatch 과정 예측 가능` , `코드의 가독성`
  - 미들웨어를 사용해 `비동기 로직`을 쉽게 처리
  - Redux DevTools를 통해 `상태 변화 및 디버깅 용이`
  - React뿐만 아니라 `다른 프레임워크와도 함께 사용 가능`

- Redux의 단점
  - 설정과 코드 복잡도 / Context API에 비해 `설정이 복잡함.`
  - 추가 라이브러리 필요: Redux 자체가 외부 라이브러리이므로 `설치 및 유지 관리 필요`
  - 단순한 상태 관리가 필요한 작은 애플리케이션에서는 `과도한 설정`

| 항목        | Context API      | Redux              |
| ----------- | ---------------- | ------------------ |
| 규모        | 작은 규모        | 대규모             |
| 복잡성      | 간단한 상태      | 복잡한 상태        |
| 학습 난이도 | 낮음             | 높음               |
| 성능        | 상황에 따라 다름 | 비교적 안정적      |
| 유연성      | 낮음             | 높음               |
| 디버깅 도구 | 기본적으로 없음  | Redux DevTool 제공 |

### Redux 설치

- 설치 코드 `npm install @reduxjs/toolkit react-redux`

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state, (value += 1);
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

- counterSlice.jsx

```js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function Counter() {
  const cout = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
```

- Counter.jsx

## _11월 13일_

### Context API

```
Context는 UX구축에 많이 사용되는 React의 기능임
```

- React는 16.3 버전부터 정식적으로 context api를 지원하고 있음.
- Context API는 특정 component가 props를 사용하지 않고, 하위 component를 포함한 모든 component에 데이터를 공유할 수 있는 기능을 제공
- 전역으로 데이터를 사용할 수 있게 해줌.
- 예) 사용자의 로그인 상태나, 쇼핑카트의 물품 수량 등을 표시할 때 사용

| **특징** | **consumer**                            | **useContext**                          |
| -------- | --------------------------------------- | --------------------------------------- |
| **사용** | 클래스형,함수형 컴포넌트 모두 사용 가능 | 함수형 컴포넌트에서 주로 사용           |
| **문법** | jsx 내에서 명시적으로 작성              | Hook으로 간결하게 사용                  |
| **장점** | 클래스형 컴포넌트의 호환성              | 간결하고 직관적인 코드 작성             |
| **단점** | jsx 내에 추가적인 요소가 필요           | 클래스형 컴포넌트에서는 사용할 수 없음. |

## _11월 6일_

## UI 프레임워크

### Chakra UI

```
오픈소스 컴포넌트 라이브러르로, 모듈화 되어 있고 접근성이 뛰어나며 보기 좋은 UI로 만들 수 있음.
```

- 버튼, 모달, 입력 등 다양한 내장 컴포넌트를 제공함.
- Dark Mode 및 Light Mode를 모두 지원함.
- Chakra UI의 useColorMode 훅을 사용해서 현재 사용하는 컬러 모드를 확인 할 수 있음.
- 기본 컴포넌트를 조합해서 새로운 컴포넌트를 쉽게 만들 수 있음.

### TailwindCSS

```
다른 프레임워크와 다르게 CSS 규칙만을 제공함.
```

- 자바스크립트 모듈이나 리액트 컴포넌트를 제공하지 않기 때문에 필요한 경우에는 직접 만들어서 사용해야 함.
- 변수 값을 조정하여 개성있는 디자인을 만들 수 있으며 디자인의 자유도가 높음.
- Dark Mode 및 Light Mode를 쉽게 적용 할 수 있음.
- 빌드 시점에 사용하지 않는 클래스는 제거 되기 때문에 높은 수준의 최적화를 지원함.
- CSS 클래스의 접두사를 활용해서 모바일, 데스크탑, 테블릿 화면에서 원하는 규칙을 지정할 수 있음.

### Headless UI

```
Headless UI는 CSS클래스를 제공하는 것이 아니라 동적 컴포넌트만 제공함.
```

- TailwindCSS를 만든 팀의 무료 오픈소스 프로젝트임.

### 프로젝트 파일 생성

![Alt text](image-2.png)

## _10월 30일_

### Styled JSX

```
Styled JSX는 CSS-in-JS라이브러리이며 내장 모듈이기 때문에 설치할 필요가 없음.
CSS 속성 지정을 위해 자바스크립트를 사용할 수 있는 라이브러리임.
```

- CSS-in-JS의 단점
  - IDE나 코드 편집기 등 개발 도구에 대한 지원이 부족함.
  - 문법 하이라이팅, 자동 완성 등의 기능을 제공하지 않음.
  - 코드 내에서 CSS에 대한 의존성이 점점 커지기 때문에 앱 번들도 커지고 느려짐.
  - 서버에 미리 CSS를 생성해도 클라이언트에서 리액트 하이드레이션이 끝나면 CSS를 다시 생성해야함.
  - 이로 인해 실행 시점에 부하가 커지며 웹 앱이 계속 느려지게 되며 기능을 추가 할 수록 이 현상은 심해짐.

### styled-jsx 실습

- 예제 코드

```jsx
export default function StyledJsx() {
  return (
    <>
      <button className="button">Styled JSX</button>
      <style jsx>
        {`
          .button {
            padding: 1em;
            border-radius: 15px;
            background: green;
            color: white;
          }
        `}
      </style>
    </>
  );
}
```

### CSS Module

```
Css 사용 시 Class 이름을 고유한 값으로 자동 생성하는 것을 의미

CSS-in-JS의 단점을 회피하기 위한 좋은 방법임.
```

### SASS

```
Next에서 기본으로 지원하는 전 처리기

$ npm install sass // 패키지 설치가 필요함.
```

- SASS 및 SCSS(Sassy CSS) 문법으로 CSS Module을 만들고 사용할 수 있음.

## _10월 25일_

### REST API

```
REST란 자원을 이름으로 구분하여 그 자원의 상태를
통신을 통해 주고 받는 것을 의미
```

- 기본 설계 규칙
  - URI는 동사보다는 명사를, 대문자보다는 소문자를 사용해야 함.
  - 주소는 마지막에 슬래시(/)를 포함하지 않음.
  - 단어를 연결할 때는 하이픈(-)을 사용함.
  - 파일 확장자는 URI에 포함하지 않음.
  - URI는 메소드를 포함하지 않음.

### 클라이언트에서 REST API 사용하기

- getServerSideProps나 getStaticProps함수 내에서 REST API를 호출하면 서버가 데이터를 가져오지만,<br> 그 외에 컴포넌트 내에서 데이터를 불러오는 작업은 클라이언트가 실행함.
- 클라이언트는 주로 두 가지 시점에 데이터를 불러옴.
  - 컴포넌트가 마운트된 후
  - 특정 이벤트가 발행한 후
- Next라고 해서 React와 다른 특별한 방법을 사용해야 할 필요는 없음.
- 브라우저의 내장 fetch API 혹은 Axios와 같은 외부 라이브러리를 사용해서 HTTP 요청을 보냄

### Json Server 설치

```
npm i -g json-server
```

### json Server 테스트

- data.json

```
{
    "token": {
        "access_token": "1f24654f5a6sd4va",
        "userId": 0
    },
    "test": [
        {
            "id": 1,
            "name": "kim",
            "title": "data.json 파일 만들기",
            "body": "project root에 생성"
        },
        {
            "id": 2,
            "name": "lee",
            "title": "json-server를 설치하기",
            "body": "백엔드를 만들기 전에 이렇게 json 파일로 데이터를 만들어서 테스트해보자"
        }
    ]
}
```

### 명령어

```
json-server ./data.json --port ????
```

- 뒤에 원하는 포트 번호를 입력하면 그 숫자로 서버를 열 수 있음.

### Axios와 Fetch

```
Next.js에서 REST API를 다룰 때는 보통 axios와 fetch 중 하나를 선택하는 경우가 많음.
```

- Axios의 장점

  - 간편한 문법 : 기본적으로 JSON 데이터를 자동으로 변환해주므로, res data로 쉽게 접근할 수 있음.
  - HTTP 요청 취소 : 요청을 취소할 수 있는 기능이 내장되어 있음.
  - 요청 및 응답 인터셉터 : 요청이나 응답을 가로채어 수정할 수 있는 기능이 있어, 이증 토큰 추가와 같은 작업이 간편함.
  - 진보된 오류 처리 : HTTP 오류 코드에 따라 에러를 더 쉽게 처리할 수 있음.

- Axios의 단점

  - 추가 패키지를 설치해야함.

- Fetch API의 장점

  - 내장 API : 브라우저에 내장되어 있어 별도의 설치가 필요 없음.
  - Promise 기반 : 비동기 작업을 처리하는데 익숙한 구조임.
  - 스트림 처리 : 데이터를 스트리밍으로 처리할 수 있는 기능이 있어, 큰 파일을 처리하는데 유용함.

- Fetch API의 단점

  - json 변환 수동 처리 : 응답에서 json으로 변환할 때 res.json()을 호출해야 함.
  - 에러 처리 복잡성 : HTTP 오류 코드(예: 404, 500)에 대한 처리가 약간 더 복잡할 수 있음.

- 결론
  - 복잡한 요청이나 에러 처리가 필요한 경우에는 axios가 더 적합할 수 있음.
  - 간단한 요청이나 내장된 기능을 활용하고 싶다면 fetch를 사용하는 것도 좋은 선택임.
  - 어떤 것을 선택할지는 프로젝트의 요구 사항과 개발자의 선호도에 따라 다를 수 있음.

### Axios 사용하기

```js
fetch("http://api.example.com)
.then(res => res.json()) // fetch에서는 json()으로 데이터를 추출
.then(data => {
  console.log(data) // 여기에 실제 응답 데이터가 있음.
});
```

- useState 사용 : users를 useState로 관리하여 데이터를 불러온 후 렌더링을 할 수 있게 함. 초기 상태는 Null
- useEffect 사용 : 컴포넌트가 처음 렌더링 될 때 한번만 데이터를 가져오기 위해 사용
- 로딩 상태 처리 : 데이터를 불러오는 동안 로딩 메세지를 표시하도록 loading 상태 추가

## _10월 23일_

### image component

```
image 컴포넌트를 사용하면 다양한 props를 전달 할 수 있음.
```

- **주요 props**
  - **src = ""**
  - **width = {500}**
  - **height = {500}**
  - **alt = ""**
  - **Placeholder = "blue" / 외부 이미지는 blurDataURL = ''로 처리**
  - **loading = "lazy"**

---

### Static Resource

- **정적 지원 중 이미지 파일은 SEO에 많은 영향을 미침**
- **다운로드 시간이 많이 걸리고, 렌더링 후에 레이아웃이 변경되는 등 UX에 영향을 미침.**
- **이것을 누적 레이아웃 이동(CLS: Cumulative Layout Shift)라고 함.**
  <img src="image-1.png">

- **Image 컴포넌트를 사용하면 CLS문제를 해결함.**
- **lazy loading은 이미지 로드 시점을 필요할 때까지 지연시키는 기술임.**
- **이미지 사이즈 최적화로 사이즈를 1/10이하로 줄여줌.**
- **Placeholder를 제공함.**

---

### Image component - Remote

```js
const nextConfig = {
  images: {
    remotePatterns: {
      {
        protocol: "http",
        hostname: "cdn.pixabay.com",
      },
    },
  }
};

export default nextConfig;
```

---

### 디렉토리 구조 조성

- **Next.js에서는 특정 파일과 디렉토리가 지정된 위치에 있어야 함.**
  - **\_app.js나 \_document.js 파일, pages/와 public/**
- **Node_modules/ : Next.js 프로젝트의 의존성 패키지를 설치하는 디렉토리**
- **pages/ : 애플리케이션의 페이지 파일을 저장하고 라우팅 시스템 관리**
- **styles/ : 스타일링 포맷(CSS, SASS, LESS 등)과 관계없이 스타일링 모듈 관리**
- **pages/ 디렉토리를 src/디렉토리 안으로 옮길 수 있음.**
- **public과 node_modules/ 를 제외한 다른 디렉토리는 모두 src/로 옮길 수 있음.**

## _10월 4일_

### _\_app_

```
app.jsx는 서버에 요청할 때 가장 먼저 실행되는 컴포넌트
```

- **페이지에 적용할 공통 레이아웃을 선언하는 곳**
- **Global CSS는 이곳에 추가 됨.**
- **props 중 Component는 서버에 요청한 페이지임.**
- **pageProps는 App.getInitalProps를 이용하여 prefetching된 데이터를 변환 함.**
- **데이터가 없다면 빈 객체({})를 반환**
- **단 getStaticProps, getServerSideProps와 같은 Data Fetching methods는 동작하지 않음.**

### _\_document_

```
document.jsx는 _app.jsx 다음에 실행됨
```

- **각 페이지에서 공통적으로 사용될 html, head, body 안에 들어갈 내용을 선언함.**
- **onClick 같은 이벤트나 CSS는 이 곳에 선언하지 않음.**
- **로직(이벤트), 스타일을 선언할 수 없음.**

### _layout.jsx_

```
layout.jsx는 app 디렉토리 아래에 위치함.
```

- **layout.jsx는 Page Project에서 사용하던 \_app.jsx와 \_document.jsx를 대체함.**
- **이 파일은 삭제해도 프로젝트를 실행하면 자동으로 생성 됨.**

## _10월 2일_

![Alt text](image.png)

- _bar/woo Page - bar 디렉토리 루트_
  - **라우팅을 하려는 페이지는 같은 이름이 들어가면 안됨**
  - **ex) localhost:3000/bar/foo/index.jsx를 주소창에 입력 시 404 오류 발생**

```
Page Routing
1. App routing (Y/N) N
2. src / ? 안 쓰는게 나음
```

## _9월 25일_

### _라우팅 시스템_

- 특징
  - _React의 React Router, Reach Router 등은 클라이언트 라우팅만 구현할 수 있음._
  - _Next는 파일 시스템 기반 페이지와 라우팅을 함._
  - _페이지는 /pages 디렉토리 안의 _.js, _.jsx, _.ts, _.tsx 파일에서 export한 React 컴포넌트 임._

```js
function HomePage() {
  return <div> This is the HomePage. </div>;
}

export default Homepage;
```

### _페이지에서 경로 매개변수 사용_

```js
export async function getServerSideProps({ params }) {
  const { name } = params;
  return {
    props: {
      name,
    },
  };
}

function Greet(props) {
  return <h1>Hello, {props.name}! </h1>;
}
export default Greet;
```

#### _경로 매개변수를 사용해서 동적 페이지를 쉽게 만들 수 있음._

- _내장 getServerSideProps 함수를 통해 URL에서 동적으로 [name] 변수 값을 가져오는 것_
- _greet/Mitch 주소로 가면 "Hello, Mitch!" 라는 문구가 렌더링 됨._

## _9월 11일_

### _파이프 라인_

```
코드를 빌드, 테스트, 배포하는 과정을 거쳐 소프트웨어 개발을 추진하는 프로세스
```

#### 파이프라인은 공식적으로 채택되지 않은 연산자임.

- **사용법**
  - **바벨 플러그인** 설치
  - **.babelrc** 파일 수정
- **Babel**

```
ECMAScript와 같은 자바스크립트 최신 버전이나,
TypeScript를 이전 버전의 코드로 변환시켜주는 Transpile 도구임.
```

- Babel의 단점
  - Babel로 변환된 코드를 이해하기 어려움.
  - 원 코드에 비해 변환 코드의 길이가 늘어남.
  - 변환에 시간이 많이 걸림
- SWC 장점

  - Next 12 이후 별도의 설정 없이 SWC를 사용할 수 있음. Next.js에 내장되어 있음.
  - Rust의 WASM(WebAssembly) 지원으로 어떤 종류의 플랫폼에서도 Next JS 개발을 할 수 있음.
  - 변환 시간이 빠름.
  - 커뮤니티가 빠르게 성장하고 있어 도움 받기가 쉬움.

- **Transpile은 어떻게 동작하나**
  - **개발자가 작성한 코드 -> Parse -> Transform -> Generate -> 이전 버전의 코드**
  - **Babel의 parser는 자바스크립트를 컴퓨터가 이해할 수 있는 코드구조인 Abstract Syntax Tree(AST)로 변환해 주는 역할을 수행함.**
  - **Babel의 traverse 모듈은 전체 트리 상태(AST)를 유지하여 노드 교체, 제거, 추가를 담당함.**
  - **generator가 수정된 AST를 일반 코드로 변환해 주게 됨.**

### _렌더링 전략_

```
렌더링 전략이랑 웹 페이지 또는 웹 애플리케이션을 웹 브라우저에 제공하는 방법을 의미
```

- **Next.js를 사용할 시에 가져오는 이점**
  - **어떤 페이지는 빌드 시점에 정적으로 생성하고 어떤 페이지는 실행 시점에 동적으로 생성할지 쉽게 정할 수 있음.**
  - **또한 특정 페이지에 대한 요청이 있을 때마다 페이지를 다시 생성할 수도 있음.**
  - **그리고 반드시 클라이언트에서 렌더링해야 할 컴포넌트도 지정할 수 있어서 개발이 쉬움.**

### _서버 사이드 렌더링(SSR)_

- **웹 페이지를 제공하는 가장 흔한 방법임.**
- **APM을 이용하는 일반적인 웹 페이지 생성**
- **자바스크립트 코드가 적재되면 동적으로 페이지 내용을 렌더링함.**

  - **여기에 스크립트 코드를 집어 넣어서 나중에 웹 페이지를 동적으로 처리할 수도 있는데 이를 하이드레이션이라고 함.**

- **SSR의 장점**
  - **더 안전한 웹 애플리케이션 : 쿠키 관리, 주요 API, 데이터 검증 등과 같은 작업을 서버에서 처리하기에 중요한 데이터를 클라이언트에 노출할 필요가 없기 때문임.**
  - **더 뛰어난 웹 사이트 호환성 : 클라이언트 환경이 자바스크립트를 사용하지 못하거나 오래된 브라우저를 사용하더라도 서비스를 제공할 수 있음.**
  - **더 뛰어난 SEO : 서버가 렌더링한 HTML을 받기 때문에 봇이나 웹 크롤러가 페이지를 렌더링할 필요가 없기 때문임.**
- **SSR이 최적의 렌더링 전략이 아닌 경우**
  - **클라이언트가 페이지를 요청할 때마다 페이지를 다시 렌더링할 수 있는 서버가 필요**
  - **다른 방식에 비해 SSR이 더 많은 자원을 소모하고, 더 많은 부하를 보이며 유지 보수 비용도 증가함.**
  - **페이지에 대한 요청을 처리하는 시간이 길어짐.**
  - **페이지가 외부 API 또는 데이터 소스에 접근해야 한다면 해당 페이지를 렌더링할 때마다 이를 다시 요청해야 함.**
  - **페이지 간의 이동은 CSR에 비해 느림.**

### _클라이언트 사이드 렌더링(CSR)_

- **React 앱을 실행하면 렌더링 시작 전에 빈 화면이 한동안 유지 되는 것이 보임.**
- **이는 서버에서 스크립트와 스타일만 포함된 HTML을 전송하기 때문임.**
- **실제 렌더링은 클라이언트에서 이루어짐**
- **CSR로 생성한 앱의 HTML을 보면 div태그 하나 밖에 없음. 그래서 빈 화면만 보였던 것**
- **빌드 과정에서 js와 css파일을 HTML페이지에 불러오도록 만들고 root div에 렌더링 함.**

#### CSR 장단/점

- **CSR 사용 이점**
  - **네이티브 앱처럼 느껴지는 웹 앱**
    - **전체 자바스크립트 번들을 다운로드 한다는 것은 렌더링 할 모든 페이지가 이미 브라우저에 다운로드 되어 있다는 뜻**
    - **다른 페이지로 이동해도 서버에 요청할 필요가 없이 바로 페이지로 이동할 수 있음.**
    - **페이지를 바꾸기 위해 새로 고칠 필요가 없음.**
  - **쉬운 페이지 전환**
    - **클라이언트에서의 내비게이션은 브라우저 화면을 새로 고칠 필요 없이 다른 페이지로의 이동을 가능하게 만듬**
    - **페이지 간 전환에 멋진 효과를 넣을 수도 있음. 애니메이션을 방해할 요소가 없기 때문임.**
  - **서버 부하 감소**
    - **서버리스 환경에서 웹 앱을 제공할 수도 있음.**
- **CSR 사용 단점**
  - **네트워크 속도가 느린 환경에서는 번들이 모두 다운로드 될 때까지 계속 빈 페이지를 봐야함.**
  - **검색 로봇에게도 그 내용은 빈 것으로 보임.**
  - **번들을 모두 받을 때까지 검색 로봇이 기다리기는 하지만 성능 점수는 낮을 것**

### _정적 사이트 생성_

```
SSG는 일부 또는 전체 페이지를 빌드 시점에 미리 렌더링 함
SSG는 SSR 및 CSR과 비교했을 때 다음과 같은 장점이 있음.
```

- **장점**
  - **쉬운 확장**
    - **정적 페이지는 단순 HTML 파일이기에 CDN을 통해 파일을 제공하거나 캐시에 저장하기 쉬움**
  - **뛰어난 성능**
    - **빌드 시점에 HTML 페이지를 미리 렌더링하기 때문에 페이지를 요청해도 클라이언트나 서버가 무언가를 처리할 필요가 없음.**
  - **더 안전한 API 요청**
    - **외부 API를 호출하거나, 데이터베이스에 접근하거나, 보호해야 할 데이터에 접근할 일이 없음.**
    - **필요한 모든 정보가 빌드 시점에 미리 페이지로 렌더링 되어 있기 때문.**

## _8월 28일_

### _Next.js_

```
Next.js는 리액트를 위해 만든 오픈소스 자바스크립트 웹 프레임워크임.
```

- **Next.js 특징**

  - **리액트에는 없는 다양한 기능을 제공함.**
  - **서버 사이드 렌더링**
  - **정적 사이트 생성**
  - **증분 정적 재생성**

- **Next.js와 비슷한 프레임워크**

  - **Gastby**
  - **Razzle**
  - **Nuxt.js**
  - **Angular Universal**

### _증분 정적 재생성_

```
정적 페이지 생성(SSG)은 미리 만들어 놓은 페이지를 서비스 하기 때문에 속도는 빠르지만,
한번 생성하고 나면 수정이 불가능함. 이러한 단점을 보완하고자 나온 것이 증분 정적 재생성
(ISR)임. 이미 생성된 페이지를 일정 시간이 지난 후에 다시 생성함.
```

### _Next.js가 제공하는 새로운 기능들_

- **코드 분할 : 페이지를 로딩 할 때 번들을 여러 조각으로 나눠 필요한 부분만 전송**
- **파일 기반 라우팅**
- **경로 기반 프리페칭 : 사용자가 다음에 이동할 수 있는 페이지를 미리 가져오는 기술.**
- **서버 사이드 렌더링(SSR) : 페이지 요청이 올 때마다 사전 렌더링**
- **정적 사이트 생성(SSG) : 빌드하는 동안 페이지를 사전 생성**
- **증분 정적 콘텐츠 생성(ISR) : 배포 후에도 재배포 없이 계속 업데이트.**
- **타입스크립트 기본 지원**
- **자동 폴리필 적용 : 이전 브라우저에서 최신 기능을 제공하는 데 필요한 코드를 제공**
- **이미지 최적화 : Next/image 컴포넌트로 제공하는 이미지의 최적화 기술**
- **웹 애플리케이션의 국제화 지원 : 다국어 지원**
