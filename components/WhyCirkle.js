import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { CustomGrid, SubTitle, Paragraph} from '../utils/styledElems.js'
import { mediaGrid } from '../utils/styleUtils.js'
import { IconBuyOrSell, IconRentOrLease, IconCoBuy, IconAIStyling } from '../utils/icons.js'

const Root = styled.div`
  && {
    background-color: #efefef;
    padding:5em 0;
    height: auto;
  
    ${mediaGrid(`md`)}{//xs phone
      padding:5em 0;
      height: auto;
    }
  
    ${mediaGrid(`sm`)}{//xs phone
      padding:5em 0;
      height: auto;
    }
  }
`
const GridCustom = styled(Grid)`
  && {
  }
`
const ParagraphCustom = styled(Paragraph)`
 && {
    font-size: 11px;
    line-height: 2.09;
    letter-spacing: 0.2px;
    padding: 0;
    margin: 0;
  }
`

const TitleIcon = styled(Typography)`
  && {
    font-family: "nimbus-sans-extended", sans-serif;
    font-size: 18px;
    color: #5bb89f;
    font-weight:normal;
    letter-spacing: 0.33px;
  }
`;

const ButtonLink = styled(Typography)`
&& {
  font-family: "nimbus-sans-extended", sans-serif;
  font-weight:700;
  font-size: 13px;
  line-height: 1.85;
  letter-spacing: 0.24px;
  span {
    border-bottom: 2px solid #1F231E;
    &::hover{
      border: none;
    }
  
  }

}
`;

const Main = styled(Grid)`
&& {
  margin-top: 3em;
}
`;


const WhyCirkle = () => (
  <Root>

    <SubTitle
      component="h2"
      variant="h2"
      align="center"
      gutterBottom
    >
      WHY SHOP WITH CIRKLE?
    </SubTitle>

    <Main 
          container
          direction="column"
          justify="center"
          alignItems="center"
          height="auto"
    >
      <Grid item xs={12} sm={10} md={10}>

        <GridCustom
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={40}
        >
            <Grid item xs={7} sm={6} md={3}>
              <IconBuyOrSell />
              <TitleIcon align="center" gutterBottom variant="h5" component="h2">
                Buy or Sell
              </TitleIcon>
              <ParagraphCustom align="center" paragraph>
                Make a purchase from our growing digital catalogue, or sell something
                from your real-life wardrobe.
              </ParagraphCustom>
            </Grid>

            <Grid item xs={7} sm={6} md={3}>
              <IconRentOrLease />
              <TitleIcon align="center" gutterBottom variant="h5" component="h2">
                Rent or Lease
              </TitleIcon>
              <ParagraphCustom align="center" paragraph>
                Save money on things you want by renting them, or make money from
                things you don’t by leasing them.
              </ParagraphCustom>
            </Grid>

            <Grid item xs={7} sm={6} md={3}>
              <IconCoBuy />
              <TitleIcon align="center" gutterBottom variant="h5" component="h2">
                Co–Buy
              </TitleIcon>
              <ParagraphCustom align="center" paragraph>
                Share the dress. Share the cost. Owning more never cost so little
                thanks to our new Co-buy feature.
              </ParagraphCustom>

              <ButtonLink align="center" variant="h5" component="h5">
                <span>COMING SOON</span>
              </ButtonLink>
            </Grid>

            <Grid item xs={7} sm={6} md={3}>
              <IconAIStyling />
              <TitleIcon align="center" gutterBottom variant="h5" component="h2">
                AI Styling + Fit
              </TitleIcon>
              <ParagraphCustom align="center" paragraph>
                Our clever tech will learn your size, as well as your style, and help
                you find more of what you like and less of what you don’t by
                connecting you with similarly-styled users.
              </ParagraphCustom>

              <ButtonLink align="center" variant="h5" component="h5">
                <span>COMING SOON</span>
              </ButtonLink>

            </Grid>
          </GridCustom>

          
      </Grid>
    </Main>

   
  </Root>
)

export default WhyCirkle
