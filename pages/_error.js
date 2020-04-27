
import Head from 'next/head'
import React from 'react'
import {Fonts} from '../utils/fontsLoader.js'
import Layout from '../components/MyLayout.js'
import HeaderBLock from '../components/HeaderBLock.js'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { ButtonCustom} from '../utils/styledElems.js'
import { mediaGrid } from '../utils/styleUtils.js'
import Link from 'next/link'


const TakeMeHome = styled(ButtonCustom)`
&& {
  a {
    text-decoration: none;
    color: #1f231f;
  }
  ${mediaGrid(`md`)}{//xs phone
  }

  ${mediaGrid(`sm`)}{//xs phone
  }

}
`;

const Title = styled(Typography)`
  && {
    font-family: "nimbus-sans-extended", sans-serif;
    font-size: 56px;
    color: #1f231f;
    font-weight:400;
    line-height: 1.07;
    letter-spacing: normal;
  }
`;

const Description = styled(Typography)`
  && {
    font-family: "nimbus-sans-extended", sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.39;
    letter-spacing: 0.6px;
    color: #1f231f;
  }
`;


const Root = styled.div`
  && {
  }
`


const Content = styled(Grid)`
  && {
    height: 230px;
  }
`



class Error extends React.Component {
  componentDidMount () {
    Fonts()

      // // const projects = [{title: 'Melody project', id: 0}, {title: 'Nextjs project', id: 1}, {title: 'Deploy apps with Zeit', id: 2}];
      //  <style>{`body { background-color: #efefef;}`}</style>

  }

  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Root>
        <Head>
          <title>Cirkle</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <style global jsx>{`
            body {
              background-color: #efefef;
            }
          `}</style>

        </Head>
      
      
      <Layout>

      <HeaderBLock />

        <Grid 
      container 
      justify="center"
    >
      <Grid item xs={10} sm={8} md={8}>

           <Content
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
              >
                <Grid item>
                  <Title  gutterBottom variant="h1" component="h1">

                  {this.props.statusCode
                  ? ` ERROR ${this.props.statusCode}`
                  : 'An error occurred on client'}

                  </Title>

                  <Description gutterBottom variant="h2" component="h2">
                    The page you are looking for does not exist
                  </Description>

                </Grid>
                <Grid item>
                  <TakeMeHome>
                    <Link href="/">
                      <a>TAKE ME HOME</a>
                    </Link>                    
                  </TakeMeHome>
                </Grid>
            </Content>

      </Grid>
    </Grid>

    <style jsx>{`
    `}</style>
  </Layout>

</Root>
    )
  }
}

export default Error


// import React from 'react'
// import Error from 'next/error'
// import fetch from 'isomorphic-unfetch'

// class Page extends React.Component {
//   static async getInitialProps() {
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const errorCode = res.statusCode > 200 ? res.statusCode : false
//     const json = await res.json()

//     return {errorCode, stars: json.stargazers_count}
//   }

//   render() {
//     if (this.props.errorCode) {
//       return <Error statusCode={this.props.errorCode} />
//     }

//     return (
//     <div>
//       Next stars: {this.props.stars}
//     </div>
//     )
//   }
// }

// export default Page
