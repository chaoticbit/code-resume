import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { Wrapper, Ul, Li, Console, Input} from './style';

const TabList = (props) => {    
    const history = useHistory();
    const NAME = 'atharva';    
    const Tabs = props.data && Object.keys(props.data);
    const List = Tabs.map(list => {
        return (
            <Li key={list}>
                <NavLink to={`/${list.toLowerCase()}`} activeClassName="active">{list}</NavLink>
            </Li>
        );
    });     
    
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

    const handleClick = (event) => {
        document.getElementById('tabset').style.display = 'none';
    }
    return (
        <Wrapper>    
            <Ul id="tabset">
                {List}                
            </Ul>            
            {/* <Console>
                <Input placeholder="Enter Query for quick search (eg: atharva.skills)" onKeyPress={executeQuery} />
            </Console>             */}
        </Wrapper>
    )
}
export default TabList;