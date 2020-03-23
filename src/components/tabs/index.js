import React from 'react';
import { NavLink } from "react-router-dom";
import { Wrapper, Ul, Li, Console, Input} from './style';

const TabList = (props) => {    
    const Tabs = props.data && Object.keys(props.data);
    const List = Tabs.map(list => {
        return (
            <Li key={list}>
                <NavLink to={`/${list.toLowerCase()}`} activeClassName="active">{list}</NavLink>
            </Li>
        );
    });         
    let executeQuery = (event, props) => {            
        if (event.key == "Enter") {            
            let query = event.target.value;
            let navigateTo = query.split('.')[1];
            console.log(props);
        }
    };
    return (
        <Wrapper>
            {/* <Ul> */}
                {/* {List} */}
                <Console>
                    <Input placeholder="Enter Query for quick search (eg: atharva.skills)" onKeyPress={() => executeQuery(event, props)} />
                </Console>
            {/* </Ul> */}
        </Wrapper>
    )
}
export default TabList;