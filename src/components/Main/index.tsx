import QuizBackground from '../QuizBackground'
import GitHubCorner from '../GitHubCorner'
import QuizContainer from '../QuizContainer'
import Widget from '../Widget'
import strings from '../../utils/strings'

const Main = () => (
  <QuizBackground backgroundImage={strings.bg}>
    <QuizContainer showExpandedImage={true}>
    <Widget>
        <Widget.Header>
          <h1>{strings.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{strings.description}</p>
        </Widget.Content>
    </Widget>
    </QuizContainer>
    <GitHubCorner />
  </QuizBackground>
)

export default Main