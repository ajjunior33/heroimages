import { createGlobalStyle } from "styled-components";

import background from "../assets/images/background.png";

export default createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, 'GraphikRegular', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background:#F0F0F5 url(${background}) no-repeat 70% top;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
body, input, button{
    font-size:1em;
    font-family: 'AirbnbCerealMedium', sans-serif;
}
button{
    cursor:pointer;
}
h1{
  font-size: 64px;
  font-family: 'GraphikSemiBold', sans-serif;
}
`;
