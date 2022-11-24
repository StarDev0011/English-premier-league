import styled from 'styled-components'

export const LeagueWrapper = styled.div`
    width: 100%;
    padding: 40px 0;
`

export const LeagueBody = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1160px;
`

export const LeagueBodyTop = styled.div`
    width: 100%;
    display: flex;
    .league_summary {
        background: #fff;
        padding: 20px;
        width: 70%;
        .unique_info {
            text-align: center;
            h3 {
                color: #999;
                text-transform: uppercase;
            }
            h1 {
                font-size: 24px;
            }
            .location {
                color: #d91e00;
            }
        }
    }
    .league_why_book {
        width: 28%;
        margin-left: 2%;
    }
`

export const LeagueBodyBottom = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    .all_tickets {
        width: 55%;
    }
    .stadium_info {
        width: 43%;
        margin-left: 2%;
        .stadium {
            margin-bottom: 30px;
            background: #fff;
            padding: 20px 20px 0 20px;
            img{
                width: 100%;                
            }
            p {
                color: #d91e00;
                font-size: 18px;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
`