import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {TableContainer, Container} from './style';
import logo from '../../assets/logo.svg';
import Delete from '../../assets/delete.svg';

interface DadosDTo{

    user: string;
    tarefa: string;
    prioridade: string;
    data:string;
}

const Listagem: React.FC = () =>{

    const [responses, setResponses] = useState<DadosDTo[]>([]);

    useEffect(()=>{
        const storage = localStorage.getItem('@Todo:responses');
        if(storage){
            setResponses(JSON.parse(storage));
        }else{
            setResponses([]);
        }
    },[]);

    useEffect(()=>{
            localStorage.setItem('@Todo:responses',JSON.stringify(responses));
    },[responses]);


    function handleDelete(i:number){

       
         const lista = [...responses];
         lista.splice(i,1);
         setResponses(lista);
      
    }
    
    return(
          
       <>
       
       <Container>
    
            <div> 
                <img src={logo} alt="Todo List" />
                
            </div>
            {/* <a href="/">Voltar</a> */}
            <Link to="/">Voltar</Link>
             <TableContainer>
             <table>
               <thead>
                 <tr>
                   <th>Usuário</th>
                   <th>tarefa</th>
                   <th>Prioridade</th>
                   <th>Data</th>
                   <th>#</th>
                 </tr>
               </thead>
   
               <tbody>
                 {responses && responses.map((item,i) => (
   
                   <tr key={i}>
                      <td className="title">{item.user}</td>
                      <td className="">{item.tarefa}</td>
                      <td>{item.prioridade}</td>
                      <td>{Intl.DateTimeFormat('pt-BR')
                      .format(new Date(item.data))}</td>
                      <td><button onClick={()=> handleDelete(i)}>
                          <img src={Delete} alt="delete"/>
                          </button>
                      </td>
                   </tr>
   
                 ))}
   
               </tbody>
             </table>
           
           </TableContainer>
          
         
         </Container>
       </>

    );

}


export default Listagem;