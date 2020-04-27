import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Link from 'next/link'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import {CustomGrid, SubTitle, Paragraph} from '../utils/styledElems'
import {mediaGrid} from '../utils/styleUtils'

import Hidden from '@material-ui/core/Hidden'

const Root = styled.div`
  && {
    background-color: #efefef;
    padding-bottom: 4em;
  }
`
const AvatarStyled = styled(Avatar)`
  && {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 120px;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      &:hover {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
  
      }
    }
    
    ${mediaGrid(`sm`)}{//xs phone
      width: 80px;
      height: 80px;
    }
  
`
const CardStyled = styled(Card)`
  && {
    background: none;
    border: none;
    box-shadow: none;
    display: flex;
  }
`
const CardContentStyled = styled(CardContent)`
  && {
    padding: 0 30px;
    ${mediaGrid(`sm`)} {
      //xs phone
      padding: 0 20px;
    }
  }
`

const members = [
  {
    linkedin: 'https://linkedin.com/in/julia-sun-9b0961136/',
    title: 'Julia Sun',
    src: '/static/images/julia.jpg',
    description:
      'Julia is a passionate founder with a wealth of experience in the finance industry and a determination to introduce new ways of consumption in the fashion world. Research shows that the average consumer sends over 30kgs of clothing to landfill each year. Julia and her co-founder, Anja, are working to reduce that number, while also transforming traditional buying methods and empowering women through clever technology.',
  },
  {
    linkedin: 'https://linkedin.com/in/miukki/',
    title: 'Anja Ishmukhametova',
    src: '/static/images/anja.jpg',
    description:
      'Anja is a self-confessed tech-head with a wealth of experience in the software industry and a determination to use technology to affect positive and sustainable change throughout the world. Using the concept of ‘smart and sustainable consumption’, she hopes to extend the life of goods, reduce the level of textiles in landfill, and give consumers the chance to own less and access more.',
  },
]

const ParagraphCustom = styled(Paragraph)`
  && {
    font-size: 11px;
    line-height: 2.09;
    letter-spacing: 0.2px;
    padding: 0;
    margin: 0;
  }
`

const Name = styled(Typography)`
  && {
    font-family: 'nimbus-sans-extended', sans-serif;
    font-size: 18px;
    color: #5bb89f;
    font-weight: normal;
    letter-spacing: 0.33px;
    line-height: 1.28;
    margin-top: 1.2em;
  }
`

const Title = styled(SubTitle)`
  && {
    margin-bottom: 4em;
  }
`

const WhyCirkle = () => (
  <Root>
    <Title component="h2" variant="h2" align="center" gutterBottom>
      MEET THE TEAM
    </Title>

    <Grid container direction="row" justify="center">
      <Grid item xs={10} sm={8}>
        <Grid container spacing={8}>
          {members.map(member => (
            <Grid item key={member.title} xs={12} md={6}>
              <CardStyled>
                <a target="blank" href={member.linkedin}>
                  <AvatarStyled alt={member.title} src={member.src} />
                </a>

                <CardContentStyled>
                  <Name gutterBottom variant="h5" component="h2">
                    {member.title}
                  </Name>
                  <ParagraphCustom paragraph>
                    {member.description}
                  </ParagraphCustom>
                </CardContentStyled>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Root>
)

export default WhyCirkle
