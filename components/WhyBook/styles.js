import styled from 'styled-components'

export const WhyBookWrapper = styled.div`
    width: 100%;
    position: relative;
    background: #fff;
    padding: 20px;
    ul {
        list-style: none;
    }
    li {
        display: flex;
        margin: 10px 0;
    }
    img {
        margin-right: 5px;
    }
`

export const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(51,51,51,.8);
    z-index: 999;
`
export const ModalBody = styled.div`
    background: #fff;
    width: 600px;
    margin: 30px auto;
    padding: 30px 50px 50px;
    .close_modal {
        p {
            font-size: 20px;
            text-align: right;
            color: #aaa;
            span {
                cursor: pointer;
            }
        }
    }
    h1 {
        text-align: center;
        border-bottom: solid 1px #eee;
        font-size: 20px;
        text-transform: uppercase;
        padding-bottom: 10px;
    }
`
