import styled from 'styled-components'

export const SiteButton = styled.div.attrs((props) => ({
  buttonTheme: props.buttonTheme || 'dark',
  buttonBorder: props.buttonBorder || false,
}))`
  a {
    background: ${(props) =>
      props.buttonTheme === 'light'
        ? props.theme.colors.btnbgColor
        : props.theme.colors.blackColor};
    color: ${(props) =>
      props.buttonTheme === 'light'
        ? props.theme.colors.whiteColor
        : props.theme.colors.blackColor};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 18px;
    text-align: center;
    font-size: 16px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    width: max-content;
    transition: all 0.5s;
    line-height: 1.4;
    border: ${(props) =>
      props.buttonBorder &&
      `1px solid 
      ${props.theme.colors.blackColor}`};

    &:hover,
    &:active,
    &:focus {
      transition: all 0.5s;
      background: ${(props) => props.theme.colors.btnbghoverColor};
      color: ${(props) => props.theme.colors.whiteColor};
    }
    @media (max-width: 465px) {
      margin-left: auto;
      margin-right: auto;
      padding: 3rem 10rem;
    }
  }
`
