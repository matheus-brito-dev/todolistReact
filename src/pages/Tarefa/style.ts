import styled,{css} from 'styled-components';
import BackgroundTarefa from '../../assets/background-tarefa.png';

interface FormProps {
    hasError:boolean;
}


export const Container = styled.div`

    height:100vh;
    display:flex;
    align-items:stretch;
    
    
`;

export const Content = styled.div`
        display:flex;
        flex-direction:column;
        width:100%;
        place-content:center;
        max-width:700px;
        align-items:center;

        a{
            color:#fff;
            margin-top:16px;
            text-decoration:none;
            font-weight:bold;

            &:hover{
                text-decoration: underline;
            }

        }
        
       
`;

export const Form = styled.form<FormProps>`
    
    display:flex;
    flex-direction:column;
    margin-top:30px;


    input{
        border-radius:10px;
        width:300px;
        border:0;
        padding:20px 10px 20px 10px;
        background:#fff;
        margin-top:10px;
        color:#999595;
        font-size:16px;

        border:2px solid #fff;

        ${(props)=> props.hasError && css`
            border-color:#c53030;
        `}
        
    }
    
    select{
        border-radius:10px;
        width:300px;
        border:0;
        padding:20px 10px 20px 10px;
        background:#fff;
        margin-top:10px;
        color:#858282;
        font-size:16px;
        border:2px solid #fff;

        ${(props)=> props.hasError && css`
            border-color:#c53030;
        `}
       
    } 


    button{
        background: #FF641A;
        border:0;
        color:#fff;
        padding:20px 10px 20px 10px;
        border-radius:10px;
        margin-top:10px;
        font-weight:bold;
        font-size:18px;
        transition: background-color 0.2s;

        &:hover{
            background:#FF812D;
        }

    }
`;

export const Background = styled.div`
    flex:1;
    background: url(${BackgroundTarefa}) no-repeat center;
    background-size:cover;
`;

export const Error = styled.span`
    display:block;
    color:#c53030;
    margin-top:8px;
    font-weight:500;
`;