import Link from 'next/link'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import {
  ButtonCustom,
  CustomGrid,
  SubTitle,
  Paragraph,
  InputEmail,
} from '../utils/styledElems.js'
import {mediaGrid} from '../utils/styleUtils.js'
import SubmitForm from '../components/SubmitForm.js'

const Table = styled(CustomGrid)`
  && {
    height: auto;
    ${mediaGrid(`sm`)} {
      //xs phone
      height: auto;
    }
  }
`

const ParagraphCustom = styled(Paragraph)`
  && {
    font-size: 11px;
    letter-spacing: 0.2px;
    padding: 0 40px;
    margin: 0;
    a {
      cursor: pointer;
      color: #fff;
      &:hover {
        text-decoration: none;
      }
    }
  }
`

const Root = styled.div`
  && {
    background-color: #1f231f;
    background-position: -200px 200px;
    background-repeat: no-repeat;
    background-size: auto auto;
    background-image: url('/static/images/footer.svg');
    padding-top: 3em;
  }
`

const Title = styled(Typography)`
  && {
    font-family: 'nimbus-sans-extended', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.56;
    letter-spacing: normal;
    color: #fff;
    text-transform: uppercase;
  }
`

const Footer = () => (
  <Root>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      style={{height: 450}}
    >
      <Grid item xs={12} style={{height: '80%'}}>
        <Table
          container
          justify="center"
          direction="column"
          alignItems="center"
          height={'250px'}
        >
          <Grid item xs={10} sm={6} md={5}>
            <Title component="h2" variant="h2" align="center" gutterBottom>
              Stay up to date with everything Cirkle and be the first to know
              when we officially launch.
            </Title>

            <SubmitForm color="#efefef" />
          </Grid>
        </Table>
      </Grid>
      <Grid item xs={12}>
        <ParagraphCustom align="right" colortext="#fff" paragraph>
          &copy; 2018 Cirklecobuy.tech
        </ParagraphCustom>
        <ParagraphCustom align="right" colortext="#fff" paragraph>
          {/* <Link href="/privacypolicy">
              <a>{'Privacy Policy'}</a>
            </Link> */}
        </ParagraphCustom>
      </Grid>
    </Grid>
  </Root>
)

export default Footer
