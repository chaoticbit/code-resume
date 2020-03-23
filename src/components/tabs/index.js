import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { Wrapper, Ul, Li, Console, Input} from './style';

const TabList = (props) => {    
    const history = useHistory();
    const NAME = 'atharva';    
    // const Tabs = props.data && Object.keys(props.data);
    
    const executeQuery = (event) => {            
        if (event.key == "Enter") {            
            let query = event.target.value
            let split = query.split('.');
            let name = split[0];
            if (name == NAME) {
                let navigateTo = split[1];
                history.push("/" + navigateTo);                
            }            
            event.target.value = '';
        }
    };
    return (
        <Wrapper>            
            <Console>
                <Input placeholder="Enter Query for quick search (eg: atharva.skills)" onKeyPress={executeQuery} />
            </Console>            
        </Wrapper>
    )
}
export default TabList;