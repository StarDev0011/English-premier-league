import styled from 'styled-components'

export const HeaderTopWrapper = styled.div`
    width: 100%;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
`
export const HeaderTopBody = styled.div`
    max-width: 1160px;
    width: 100%;
    display:flex;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 465px) {
        display: block;
    }
`
export const LogoWrapper = styled.div`
    width: 30%;
    svg {
        display: none;
    }
    @media (max-width: 465px) {
        width: 100%;
        display: flex;
        a {
            margin: 0 auto;
        }
        svg {
            display: block;
            margin: auto 0;
            font-size: 24px;
            cursor: pointer;
        }
    }
`