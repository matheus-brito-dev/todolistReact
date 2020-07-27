import React,{useState,useEffect,FormEvent,} from 'react';

import {Container,Form,Content,Background,Error} from './style';
import logo from '../../assets/logo.svg';

interface DadosDTo{

    user: string;
    tarefa: string;
    prioridade: string;
    data:string;
}

const Tarefa:React.FC = () =>{
//Estados dos inputs
const [user, setUser] = useState('');
const [tarefa, setTarefa] = useState('');
const [prioridade, setPrioridade] = useState('');
const [data, setData] = useState(''); 


//Estados dos erros
 const [userError, setUserError] = useState('');
 const [tarefaError, setTarefaError] = useState('');
 const [prioridadeError, setPrioridadeError] = useState('');
 const [dataError, setDataError] = useState(''); 
 


const [responses,setResponses] = useState<DadosDTo[]>(()=>{
    const storage = localStorage.getItem('@Todo:responses');
        if(storage){
            return(JSON.parse(storage));
        }else{
            return([]);
        }
});


useEffect(()=>{
    localStorage.setItem('@Todo:responses', JSON.stringify(responses));
},[responses]);


function handleCadastrarTarefa(event:FormEvent<HTMLFormElement>){

    event.preventDefault();

    if(!user && !tarefa && !prioridade && !data){
        setUserError('Digite o nome');
        setTarefaError('Digite a tarefa');
        setPrioridadeError('Digite a prioridade');
        setDataError('Digite a data');
        return;
    }

    try{
        const dados = {
            user,
            tarefa,
            prioridade,
            data,
   
       }
       
       setResponses([...responses,dados]);
       setUser('');
       setTarefa('');
       setPrioridade('');
       setData('');

       setUserError('');
       setTarefaError('');
       setPrioridadeError('');
       setDataError('');

    }catch(err){
        
    }
    
}
    return( 
        <>
        
        <Container>
            <Content>
            <img src={logo} alt="Todo List" />
            <Form hasError={!!userError} onSubmit={handleCadastrarTarefa}>

                 
                <input 
                value={user} 
                onChange={(e)=>setUser(e.target.value)}
                type="text" 
                placeholder="Insira seu nome"
                />  
                
                {userError && <Error>{userError}</Error>}

                <input value={tarefa} 
                onChange={(e)=>setTarefa(e.target.value)}
                type="text" 
                placeholder="Insira sua tarefa"
                />

                {tarefaError && <Error>{tarefaError}</Error>}   
                 
                <select id="prioridades" value={prioridade}
                onChange={(e) => setPrioridade(e.target.value) }> 
                    <option>Insira a prioridade</option>
                    <option value="Alta">Alta</option>
                    <option value="Medio">Médio</option>
                    <option value="Baixa">Baixa</option>
                </select>

                {prioridadeError && <Error>{prioridadeError}</Error>}

                <input onChange={(e)=>setData(e.target.value)} 
                value={data} 
                type="date" 
                placeholder="Insira o prazo final"/>

                {dataError && <Error>{dataError}</Error>}
                
                <button>cadastrar</button>
            </Form>
                <a href="/listagem">Ver todos</a>
            </Content>
            <Background/>
        </Container>
        </>
        
    );

}



export default Tarefa;