import { useRouter } from 'next/router'
import QuizBackground from '../QuizBackground'
import GitHubCorner from '../GitHubCorner'
import QuizContainer from '../QuizContainer'
import Widget from '../Widget'
import Button from '../Button'
import strings from '../../utils/strings'

const Main = () => {
  const router = useRouter()

  const goToQuiz = () => {
    router.push('/quiz')
  }

  return (
  <QuizBackground backgroundImage={strings.bg}>
    <QuizContainer showExpandedImage={true}>
    <Widget>
        <Widget.Header>
          <h1>{strings.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{strings.description}</p>
        </Widget.Content>
        <Button onClick={goToQuiz}>Bora ver</Button>
    </Widget>
    </QuizContainer>
    <GitHubCorner />
  </QuizBackground>
  )
}

export default Main