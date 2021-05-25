import React from 'react'
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc'

const FAQInternaScreen = ({ question, category }) => <FAQQuestionScreen question={question} category={category} />

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes

export default websitePageHOC(FAQInternaScreen)

export const getStaticProps = async ({ params }) => {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data)

  const dadosDaPagina = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.slug) {
        return true
      }

      return false
    })

    return {
      ...valorAcumulado,
      category: faqCategory,
      question: foundQuestion
    }
  }, {})

  return {
    props: {
      category: dadosDaPagina.category,
      question: dadosDaPagina.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPagina.question.title
        }
      }
    }
  }
}

export const getStaticPaths = async () => {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data)

  const paths = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => ({
      params: {
        slug: question.slug
      }
    }))

    return [...valorAcumulado, ...questionsPaths]
  }, [])

  return {
    paths,
    fallback: false
  }
}
