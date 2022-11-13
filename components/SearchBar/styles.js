import styled from 'styled-components'

export const SearchBarWrapper = styled.div`
    width: 50%;
    margin-left: 20%;
    h5 {
        color: #999999;
        font-size: 12px;
    }
    input {
        padding: 6px 18px;
        font-size: 17px;
        line-height: 1.33;
        width: 100%;
        text-transform: uppercase;
        float: left;
        border: 1px solid #eaeaea;
        box-shadow: inset 0 1px 1px rgb(0 0 0 /8%);
    }
    button {
        color: #fff;
        background-color: #d91e00;
        border-color: #c01a00;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        font-size: 16px;
        padding: 6px 18px;
        line-height: 1.33;
        text-transform: uppercase;
    }
`

export const SearchFieldWrapper = styled.div`
    width: 100%;
    position: relative;
`