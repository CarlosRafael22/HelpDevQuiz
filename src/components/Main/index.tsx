import QuizBackground from '../QuizBackground'
import GitHubCorner from '../GitHubCorner'
import strings from '../../utils/strings'

const Main = () => (
  <QuizBackground backgroundImage={strings.bg}>
    {/* <QuizContainer showExpandedImage={true}>
    </QuizContainer> */}
    <GitHubCorner projectUrl="https://github.com/CarlosRafael22/NeyQuiz" />
  </QuizBackground>
)

export default Main