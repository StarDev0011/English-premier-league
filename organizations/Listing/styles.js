import styled from 'styled-components'

export const ListingWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.colors.whiteColor};
  .league_item {
    display: flex;
    width: 100%;
    border-bottom: solid 1px #eee;
    justify-content: space-between;
    
    .event-date {
      padding: 20px;
      margin-top: auto;
      margin-bottom: auto;
      text-align: center;
    }
    .month {
      font-weight: bold;
      text-transform: uppercase;
    }
    .date {
      font-weight: bold;
      font-size: 30px;
    }
    .event-info {
      padding: 20px;
      width: 70%;
      margin-top: auto;
      margin-bottom: auto;
      .event-name {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: .05em;
        line-height: 1.4;
        color: ${(props) => props.theme.colors.labelColor};
      }
      .event-description {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.3;
      }
      .event-location {
        font-size: 13px;
      }
    }
    .event-action {
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`
export const TeamWrapper = styled.div`
    width: 100%;
    padding: 40px 0;
`
export const TeamBody = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1160px;
    display: flex;
    .team_matches {
        width: 70%;
    }
    .team_sidebar {
        width: 28%;
        margin-left: 2%;
    }
`
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
                margin-top: 10px;
            }
            .start_date {
              margin: 10px 0;
            }
            .subject_to_change {
              color: #d91e00;
            }
            .sold_out {
              font-weight: bold;
              font-size: 22px;
            }
            .available_tickets {
              margin-top: 15px;
              display: flex;
              justify-content: center;
              font-size: 18px;
              font-weight: bold;
              .tickets_amount {
                padding: 10px;
                background-color: #fff;
                box-shadow: 0 2px 6px rgb(0 0 0 / 15%);
              }
              p {
                margin-top: auto;
                margin-bottom: auto;
                margin-left: 10px;
                text-transform: uppercase;
              }
            }
            .price {
              color: #3db900;
              font-weight: bold;
              .cost {
                font-size: 24px;
              }
            }
        }
        .general_description {
          margin-top: 10px;
          p {
            margin-bottom: 5px;
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
                height: 100%;              
            }
        }
    }
`