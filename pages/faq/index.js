import React from 'react'
import FAQScreen from '../../src/components/screens/FAQScreen'

import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

function FAQPage({ faqCategories }) {
  return <FAQScreen faqCategories={faqCategories} />
}

FAQPage.propTypes = FAQScreen.propTypes

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes'
    }
  }
})

export const getStaticProps = async () => {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data)

  return {
    props: {
      faqCategories
    }
  }
}
