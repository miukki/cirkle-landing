import IconButton from '@material-ui/core/IconButton'
import SvgIcon from '@material-ui/core/SvgIcon'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Link from 'next/link'

const logoStyle = {
  width: 60.2,
  height: 60.2,
}

const menuStyle = {
  width: 27,
  height: 22,
}

const ButtonBlock = styled.div`
  && {
    padding: 40px;
  }
`

const IconButtonMenu = styled(IconButton)`
  && {
    padding: 0;
    height: 60px;
    width: 60px;
  }
`

const IconButtonLogo = styled(IconButton)`
  && {
    padding: 10px 12px 10px 7px;
  }
`

const LogoBlock = styled.div`
  && {
    flex-grow: 1;
  }
`

const Container = styled.div`
  && {
    display: flex;
  }
`
const Root = styled(Grid)`
  && {
  }
`

const IconMenu = ({color}) => {
  return (
    <ButtonBlock>
      <IconButtonMenu aria-label="Menu">
        <SvgIcon
          style={menuStyle}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="1317"
          height="1024"
          viewBox="0 0 1317 1024"
        >
          <g id="icomoon-ignore" />
          <path fill="#000" d="M0 163.362h1302.772v-163.401h-1302.772z" />
          <path fill="#000" d="M0 571.792h1302.772v-163.352h-1302.772z" />
          <path fill="#000" d="M0 980.222h1302.772v-163.352h-1302.772z" />
        </SvgIcon>
      </IconButtonMenu>
    </ButtonBlock>
  )
}

const IconLogo = ({color}) => {
  return (
    <ButtonBlock>
      <IconButtonLogo aria-label="Cirkle">
        <SvgIcon
          style={logoStyle}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="892"
          height="1024"
          viewBox="0 0 892 1024"
        >
          <g id="icomoon-ignore" />
          <path
            fill="#000"
            d="M810.375 803.151c-162.845 162.845-426.92 162.845-589.765 0-162.86-162.86-162.86-426.92 0-589.78l-69.632-69.617c-201.304 201.318-201.304 527.711 0 729.015 201.318 201.318 527.711 201.318 729.015 0l-69.617-69.617z"
          />
          <path
            fill="#000"
            d="M793.811 101.023l-11.249 15.024 47.704 35.752-8.397 11.205-47.704-35.738-12.361 16.501 49.781 37.288-8.47 11.293-62.713-47.002 48.933-65.287 62.098 46.519-8.455 11.293z"
          />
          <path
            fill="#000"
            d="M621.868 9.952l-42.628 26.346 35.387 54.96-20.773-2.253-28.584-44.149-25.161 15.945-2.399 22.089-16.091-1.755 8.85-81.13 16.062 1.755-4.432 40.697 56.159-35.079z"
          />
          <path
            fill="#000"
            d="M663.217 93.566l54.433 21.753-5.383 13.517-69.456-27.765 30.31-75.776 15.009 5.983z"
          />
          <path
            fill="#000"
            d="M444.853 43.223l-33.631 5.91-3.92-22.235 33.763-5.91c5.53-0.951 9.801-0.483 12.727 1.448 2.794 1.799 3.803 4.608 4.169 6.656 0.746 4.286 0.044 11.82-13.107 14.131zM474.33 26.327c-1.156-6.524-4.432-12.054-9.201-15.55-6.085-4.476-14.365-5.822-24.576-4.023l-51.61 9.040 14.102 80.428 15.945-2.823-5.369-30.457 29.55-5.193 26.887 26.683 19.324-3.394-28.877-28.701c12.39-6.246 15.36-17.291 13.824-26.010z"
          />
          <path
            fill="#000"
            d="M332.275 35.508l30.749 75.6-14.98 6.085-30.749-75.6z"
          />
          <path
            fill="#000"
            d="M299.339 109.629c4.813 19.017-3.408 36.542-23.757 50.673-11.337 7.885-23.011 11.995-33.938 11.995-1.287 0-2.531-0.044-3.789-0.161-12.083-1.053-22.352-7.241-29.711-17.818-5.091-7.314-7.548-15.214-7.548-23.201 0-15.272 9.040-30.72 26.068-42.525 20.699-14.395 41.443-15.199 56.876-2.209l2.165 1.829-12.771 11.059-1.565-1.258c-10.167-8.104-22.967-7.241-37.040 2.545-17.964 12.478-22.747 29.433-12.478 44.208 9.977 14.336 28.467 15.77 46.065 3.569 13.561-9.45 19.032-20.436 16.325-32.724l-0.439-1.872 14.833-6.949 0.702 2.838z"
          />
        </SvgIcon>
      </IconButtonLogo>
    </ButtonBlock>
  )
}

const HeaderBLock = () => (
  <Root>
    <Container>
      <LogoBlock>
        <Link href="/">
          <a>
            <IconLogo />
          </a>
        </Link>
      </LogoBlock>
      {/* <IconMenu /> */}
    </Container>
  </Root>
)

export default HeaderBLock
