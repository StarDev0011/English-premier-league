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
    .seat {
      padding: 10px;
      @media (max-width: 465px) {
        padding 10px 0;
      }
      select {
        padding: 6px 18px;
        background: #ddd;
        border: solid 1px #ddd;
        font-size: 18px;
      }
    }
    .ticket-price {
      padding: 10px;
      display: flex;
      align-items: center;
      @media (max-width: 465px) {
        padding 10px 0;
      }
      p {
        margin-right: 20px;
        align-items: center;
        display: flex;
        span {
          font-weight: bold;
          font-size: 20px;
          margin-right: 10px;
        }
      }
      a {
        @media (max-width: 465px) {
          padding: 1rem 2rem;
        }
      }
    }
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
      @media (max-width: 465px) {
        display: none;
      }
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
    @media (max-width: 465px) {
      display: block;
      .team_matches, .team_sidebar {
        width: 100%;
      }
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
    @media (max-width: 465px) {
      display: block;
    }
    .league_summary {
        background: #fff;
        padding: 20px;
        width: 70%;
        @media (max-width: 465px) {
          width: 100%;
        }
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
        @media (max-width: 465px) {
          display: none;
        }
    }
`

export const LeagueBodyBottom = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    @media (max-width: 465px) {
      display: block;
    }
    .all_tickets {
        width: 55%;
        @media (max-width: 465px) {
          width: 100%;
        }
    }
    .stadium_info {
        width: 43%;
        margin-left: 2%;
        @media (max-width: 465px) {
          width: 100%;
          margin-left: 0;
        }
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