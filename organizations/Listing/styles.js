import styled from 'styled-components'

export const ListingWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme.colors.whiteColor};
  .league_item {
    display: flex;
    width: 100%;
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