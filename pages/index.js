import Head from 'next/head'
import dynamic from 'next/dynamic'

import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const HeaderBlock = dynamic(() => import('../components/HeaderBlock'), {
  ssr: false,
})

const Layout = dynamic(() => import('../components/MyLayout'), {
  ssr: false,
})

const FindOutMore = dynamic(() => import('../components/FindOutMore'), {
  ssr: false,
})

const SubmitBLock = dynamic(() => import('../components/SubmitBlock'), {
  ssr: false,
})

const WhyCirkle = dynamic(() => import('../components/WhyCirkle'), {
  ssr: false,
})

const Footer = dynamic(() => import('../components/Footer'), {
  ssr: false,
})

const Team = dynamic(() => import('../components/Team'), {
  ssr: false,
})

import {Fonts} from '../utils/fontsLoader'

const BgImage = styled(Grid)`
  && {
    background-position: 150% 110px;
    background-repeat: no-repeat;
    background-size: auto;
    background-image: url('/static/images/bg.svg');
    background-color: #efefef;
    background-attachment: local;
    background-blend-mode: normal;
  }
`

class Index extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render() {
    return (
      <>
        <Head>
          <title>Cirkle</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <style global jsx>{`
            body {
              background-color: #efefef;
            }
          `}</style>
        </Head>

        <Layout>
          <BgImage>
            <HeaderBlock />
            <FindOutMore />
          </BgImage>

          <SubmitBLock />
          <WhyCirkle />
          <Team />
          <Footer />

          <style jsx>{``}</style>
        </Layout>
      </>
    )
  }
}

Index.getInitialProps = async function() {
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // const data = await res.json()

  // console.log(`Show data fetched. Count: ${data.length}, ${data}`)

  return {
    projects: [], //data.map(entry => entry.show),
  }
}

export default Index
