import styled, { css } from 'styled-components'

type QuizContainerProps = {
    showExpandedImage?: boolean
}

const QuizContainer = styled.div<QuizContainerProps>`
  max-width: 450px;
  padding-top: 45px;
  margin: auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    ${({ showExpandedImage }) => showExpandedImage && css`margin-top: 3rem;`}
    padding: 15px;
  }
`

export default QuizContainer