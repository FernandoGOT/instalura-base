import React from 'react'
import PropTypes from 'prop-types'
import FAQScreen from '../../src/components/screens/FAQScreen'

const FAQPage = ({ faqCategories }) => <FAQScreen faqCategories={faqCategories} />

FAQPage.propTypes = {
  faqCategories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string
        })
      ).isRequired
    })
  ).isRequired
}

export default FAQPage

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
