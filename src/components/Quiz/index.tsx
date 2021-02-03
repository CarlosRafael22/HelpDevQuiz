import { useState } from 'react'
import { useRouter } from 'next/router'
import { QuizBackground, QuizContainer, Question, Widget } from '../index'
import questions from '../../utils/questions'
import OptionStyle from '../Option'
import ButtonStyle from '../Button'

type QuizReviewProps = {
    answers: Object,
    resetQuiz: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const QuizReview = ({answers, resetQuiz}: QuizReviewProps) => {
    const totalRight = Object.entries(answers).filter(answer => answer[1])
    const tweetText = `Acabei de fazer o Ney Quiz, marquei ${totalRight.length}/${Object.entries(answers).length}. Quero ver se tu conhece as tuitadas violentas de Neymar! #NeyQuiz`
    return (
        <>
        <Widget>
          <Widget.Header>
          <h3 style={{ lineHeight: '1.2'}}>Não que nem Neymar, mas até que deu para fazer uns golzinhos.<br /> <br />Se liga no placar:</h3>
          </Widget.Header>
          <Widget.Content>
              {Object.entries(answers).map((answer, index) => {
                  return (<OptionStyle isCorrect={answer[1]} key={`result_${index}`}>
                      {`Questão ${parseInt(answer[0]) + 1} - ${answer[1] ? 'Acertou ' : 'Errou '}`}
                      {/* {answer[1] ? <i class="fas fa-bullseye"></i> : <i class="fas fa-times"></i>} */}
                      </OptionStyle>)
              })}
              <div style={{ textAlign: 'center' }}>
                <ButtonStyle onClick={resetQuiz}><i className="fas fa-redo" /> Fazer de novo</ButtonStyle>
              </div>
              </Widget.Content>
        </Widget>
        </>
    )
}

const IMAGES = {
    bg: 'https://uploads.metropoles.com/wp-content/uploads/2019/12/16173754/Neymar-psg-100.jpg',
    goal: 'https://www.hojeemdia.com.br/polopoly_fs/1.659015!/image/image.jpg_gen/derivatives/landscape_653/image.jpg',
    miss: 'https://fanaticosporfuteboll.com.br/wp-content/uploads/2020/08/INCRÍVEL-Neymar-perde-gol-cara-a-cara-com-o-goleiro.jpg'
}


const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [bgImage, setBgImage] = useState<string | undefined>(IMAGES['bg'])
    const [answers, updateAnswers] = useState({})
    const numberOfQuestions = questions.length
    const router = useRouter()
    const { userName } = router.query

    const onChoosenOptionCallbackHandler = ({
        hasChosenCorrectOption, chosenOption
    }: {hasChosenCorrectOption: boolean, chosenOption: number | undefined}) => {
        setCurrentQuestion(prevQuestion => currentQuestion + 1)
        updateAnswers(prevAnswers => ({...prevAnswers, [currentQuestion]: hasChosenCorrectOption }))
        // setBgImage(hasChosenCorrectOption ? IMAGES['goal'] : IMAGES['miss'])
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        updateAnswers({})
        setBgImage(undefined)
    }

    const renderPreviousQuestion = () => setCurrentQuestion(currentQuestion - 1)
    // console.log('QUESTION IS: ', currentQuestion, questions.length, answers)
    const finishedQuiz = currentQuestion >= questions.length

    return (
        <QuizBackground backgroundImage={bgImage}>
            <QuizContainer showExpandedImage={finishedQuiz}>
                {!finishedQuiz && (
                    <Question
                        question={questions[currentQuestion]}
                        index={currentQuestion}
                        numberOfQuestions={numberOfQuestions}
                        onChoosenOptionCallback={onChoosenOptionCallbackHandler}
                        onBackPress={renderPreviousQuestion}
                        key={`question_${currentQuestion}`}
                    />
                )}
                {finishedQuiz && (
                    <QuizReview answers={answers} resetQuiz={resetQuiz} />
                )}
            </QuizContainer>
        </QuizBackground>
    )
}

export default Quiz