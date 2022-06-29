import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;600;700;800;900&display=swap');
:root {
  --green0: #BAD9C8;
  --green50: #95BFA4;
  --green100: #435944;
  --bg: #FFE3D5;
  --bg-body: #E8C0B7;
  --orange: #F29966;
  --orange2: #F27D72;
  --brown: #946A56;
  --red0: #8C1F1F;
  --red50: #591616;
  --red100: #401616;
  --black: #0D0D0D;
  --font: 'Montserrat Alternates', sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat Alternates', sans-serif;
}

button {
  cursor: pointer;
}

ul, ol, li {
  list-style: none;
}
`