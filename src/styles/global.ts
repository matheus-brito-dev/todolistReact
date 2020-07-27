import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`


    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    body{
        background-color:#715151;
        -webkit-font-smoothing: antialiased;
    }

    body,input,button{
        font: 16px Roboto,sans-serif;

    }

    button{
        cursor:pointer;
    }

    #root{
        /* max-width: 960px;
        margin:0 auto;
        padding: 40px 20px; */
    }


`;