import Link from 'next/link'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { ButtonCustom, CustomGrid, SubTitle, Paragraph, InputEmail} from '../utils/styledElems.js'
import { mediaGrid } from '../utils/styleUtils.js'
import SubmitForm from '../components/SubmitForm.js'


const Root = styled.div`
  && {
  }
`;

const Title = styled(Typography)`
  && {
    font-family: "nimbus-sans-extended", sans-serif;
    font-weight:700;
    font-size: 32px;
    letter-spacing: 0.4px;
    color: #1f231f;
    text-transform: uppercase;
    margin-top: 10px;
}
`;


const Table = styled(CustomGrid)`
&& {
  margin:5em auto;
  height: auto;

  ${mediaGrid(`md`)}{//xs phone
    margin:5em auto;
    height: auto;
  }

  ${mediaGrid(`sm`)}{//xs phone
    margin:5em auto;
    height: auto;
  }

}
`;


const SubmitBLock = () => (
  <Root>
    <Table 
          container
          direction="column"
          justify="center"
          alignItems="center"
          height="auto"
    >
        <Grid item xs={10} sm={10} md={5}>

          <SubTitle
            component="h2"
            variant="h2"
            align="center"
            gutterBottom
          >
            BE ONE OF THE FIRST TO EXPERIENCE
          </SubTitle>
          <Title
            component="h1"
            variant="h1"
            align="center"
            gutterBottom
          >
            the future of fashion
          </Title>
          <Paragraph align="center" paragraph>
            Our online marketplace is like nothing you’ve ever shopped before.
            It’s an expanding digital wardrobe that allows you buy, sell, lease
            and rent, all in one place. Even Co-buy — a market-first feature
            coming soon that will allow you to make purchases together, making
            fashion more affordable and sustainable than ever.
          </Paragraph>

          <SubmitForm />

        </Grid>

      </Table>
    
  </Root>
)

export default SubmitBLock
