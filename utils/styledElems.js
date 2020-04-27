import ButtonBase from '@material-ui/core/ButtonBase'
import styled from 'styled-components'
import {mediaGrid} from './styleUtils.js'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const ButtonCustom = styled(ButtonBase)`
  && {
    font-family: 'nimbus-sans-extended', sans-serif;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 200px;
    height: 50px;
    border: solid 2px ${({bcolor}) => bcolor || '#1f231f'};
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.56;
    letter-spacing: 0.53px;
    text-align: center;
    color: ${({color}) => color || '#1f231f'};
    a {
      text-decoration: none;
      color: ${({color}) => color || '#1f231f'};
    }
  }
`

const CustomGrid = styled(Grid)`
  && {
    height: ${({height}) => height || '100%'};
    ${mediaGrid(`xl`)} {
      //lg d
      @media only screen and (orientation: portrait) {
      }
    }
    ${mediaGrid(`lg`)} {
      //md d
      @media only screen and (orientation: portrait) {
      }
    }
    ${mediaGrid(`md`)} {
      //sm tablet
      height: auto;
    }
    ${mediaGrid(`sm`)} {
      //xs phone
      height: auto;
    }
  }
`

const SubTitle = styled(Typography)`
  && {
    font-family: 'nimbus-sans-extended', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #9f9ba7;
    letter-spacing: normal;
  }
`

const Paragraph = styled(Typography)`
  && {
    font-family: 'canada-type-gibson', sans-serif;
    font-weight: 300;
    font-size: 13px;
    letter-spacing: normal;
    color: ${({colortext}) => colortext || '#1f231f'};
    line-height: 2;
    padding: 35px 0;
  }
`

const InputEmail = styled.input`
  && {
    outline: none;
    font-family: 'canada-type-gibson', sans-serif;
    font-weight: 300;
    font-size: 13px;
    font-style: italic;
    font-stretch: normal;
    letter-spacing: normal;
    color: #9f9ba7;
    font-size: 13px;
    padding: 0 10px;
    height: 26px;
    line-height: 2;
    border: none;
    background: none;
    width: 100%;
    border-bottom: solid 2px ${({bcolor}) => bcolor || '#5bb89f'};
  }
`

export {ButtonCustom, CustomGrid, SubTitle, Paragraph, InputEmail}
