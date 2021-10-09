import React, {useState} from "react";
import * as C from './styles';
import {Item} from '../../Types/Item';
import { isTemplateExpression } from "typescript";
type Props = {
        item: Item

}


export const List = ({item}:Props) =>{
    const [isChecked, setIsChecked] = useState(item.done);

        return (

                <C.Container done={isChecked}>
                <input 
                type="checkbox"  
                checked = {isChecked}
                onChange={e => setIsChecked(e.target.checked)}
                />
                <label>{item.name}</label>
                </C.Container>

        );


}