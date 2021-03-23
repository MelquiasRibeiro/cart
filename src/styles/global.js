import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}
body{
    background-color:#D2D5E6 ;
    -webkit-font-smoothing: antialiased;
}
#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
}
body, input, button {
 font: 14px Poppins,sans-serif;
 color:#000000;
}
button{
    cursor: pointer;
    color:#ffffff;
}
`;