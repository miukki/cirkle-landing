// components/MyLayout.js

import Header from './HeaderBlock'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default withLayout
