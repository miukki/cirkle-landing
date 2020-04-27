import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import {ButtonCustom, CustomGrid} from '../utils/styledElems.js'
import {mediaGrid} from '../utils/styleUtils.js'
import Link from 'next/link'

const FindOutMore = styled(ButtonCustom)`
  && {
    ${mediaGrid(`md`)} {
      //xs phone
      margin-bottom: 40px;
      margin-top: 20px;
    }

    ${mediaGrid(`sm`)} {
      //xs phone
      margin-bottom: 40px;
      margin-top: 20px;
    }
  }
`

const Title = styled(Typography)`
  && {
    font-family: 'nimbus-sans-extended', sans-serif;
    font-size: 56px;
    color: #1f231f;
    font-weight: 400;
  }
`

const SubTitle = styled(Typography)`
  && {
    font-family: 'nimbus-sans-extended', sans-serif;
    font-size: 18px;
    color: #1f231f;
    font-weight: 400;
  }
`

const Root = styled(Grid)`
  && {
  }
`
const HeaderBLock = () => (
  <Root>
    <CustomGrid container justify="center" height={'700px'}>
      <Grid item xs={10} sm={8} md={8}>
        <CustomGrid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          height={'100%'}
        >
          <Grid item xs={11}>
            <CustomGrid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
              height={'70%'}
            >
              <Grid item>
                <Title gutterBottom variant="h1" component="h1">
                  A<br />
                  PEER–TO–PEER
                  <br />
                  FASHION
                  <br />
                  MARKETPLACE
                </Title>
              </Grid>
              <Grid item>
                <SubTitle gutterBottom variant="h2" component="h2">
                  Enabling fashion-savvy shoppers
                  <br />
                  to monetise their wardrobes
                </SubTitle>
              </Grid>
              <Grid item>
                <FindOutMore>
                  <Link href="/static/cirkle.key">
                    <a>{'FIND OUT MORE'}</a>
                  </Link>
                </FindOutMore>
              </Grid>
            </CustomGrid>
          </Grid>
        </CustomGrid>
      </Grid>
    </CustomGrid>

    {/* 
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/contacts">
        <a style={linkStyle}>Contacts</a>
      </Link>
    </div> */}
  </Root>
)

export default HeaderBLock
