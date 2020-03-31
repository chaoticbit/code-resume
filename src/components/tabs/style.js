import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.sideBar};
    font-size: .93rem;
    line-height: 1.3rem;
    @media print {
        display: none;
    }
`;

export const Ul = styled.ul`
    background: ${props => props.theme.tabs};
    margin: 0;
    display: flex;
    align-items: center;
    text-transform: lowercase;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-wrap: nowrap;
      overflow-x: auto;
      &::-webkit-scrollbar {
        height: 2px;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: ${props => props.theme.textColor};
        }
    }
`

export const Li = styled.li`
    position: relative;
    @media (max-width: 768px) {
        flex: 0 0 auto;
        display: flex;
    }
    a {
        color: ${props => props.theme.textColor};
        display: inline-block;
        padding: 10px 25px;
        @media (max-width: 768px) {
            flex: 1 1 auto;
            text-align: center;
        }
        &.active {
            background: ${props => props.theme.sideBar};
            color: ${props => props.theme.textActiveColor};
            &:after {
                content: '';
                position: absolute;
                background: ${props => props.theme.tabsBorderBottom};
                height:1px;
                width: 100%;
                left: 0;
                bottom: 0;
                @media (max-width: 768px) {
                    background: transparent;
                }
            }
        }
        &:hover {
            color: ${props => props.theme.textActiveColor};
        }
    }
`
export const QueryButton = styled.button`
    position: relative;
    display: inline-block;
    
`

export const Console = styled.div`
    position: relative;
    @media (max-width: 768px) {
        flex: 0 0 auto;
        display: flex;
    }
    border-bottom: 1px solid ${props => props.theme.textActiveColor};
`
export const Input = styled.input`
    width: 100%;
    position: relative;
    padding: 15px 15px 10px 0px;
    background-color: transparent;
    color: ${props => props.theme.textActiveColor};
    outline: 0;
    font-size: 14px;
    border: none;
    font-family: Monaco, Menlo, Inconsolata, "Courier New", monospace;
`