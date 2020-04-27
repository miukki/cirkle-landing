// Commonly used to implement server side rendering for css-in-js libraries
import Document, {Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import styled from 'styled-components'

const Title = styled.h1`
  color: purple;
`

class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    //Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()

    //Retrieve styles from components in the page
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )

    //Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    //Pass styleTags as a prop
    return {...page, styleTags}
  }

  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    const {styleTags} = this.props
    return (
      <html>
        <Head>
          <style>{`body { background: none } /* custom! */`}</style>
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
