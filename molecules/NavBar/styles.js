import styled from 'styled-components'

export const NavBarWrapper = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: #d91e00;
    position: relative;
`
export const NavBarBody = styled.div`
    max-width: 1160px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    ul {
        list-style: none;
        li {
            display:inline-block;
            margin-left: 10px;
            margin-right: 10px;
            a {
                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
                color: #fff;
            }
        }
    }
`