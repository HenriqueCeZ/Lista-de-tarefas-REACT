import  {useState} from 'react';
import * as C from  './App.styles';
import {Item} from './Types/Item'; 
import {List} from './components/ListItem';
import {Addarea} from './components/Addarea';

const App = () =>{
    const [list,setList] = useState<Item[]>([
      {id:1,name:'Comprar pão',done:false},
      {id:2,name:'Fazer o leite',done:true},
      {id:3,name:'Fazer Feijão',done:false},

    ]);
const handleAddTask = (taskName: string)=>{
      let newList = [...list];
      newList.push({
          id: list.length + 1,
          name:taskName,
          done:false

      });
      setList(newList);
      


}



  return(
      <C.Container>
          <C.Area>
            <C.Header>
              Lista de tarefas

              

            </C.Header>
            <Addarea onEnter={handleAddTask}/>
            {list.map((item,index)=>(
             <List key={index} item={item}/>
            ))}

            
          </C.Area>

      </C.Container>


  );


}
export default App;
