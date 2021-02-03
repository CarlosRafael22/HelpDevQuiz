import { useEffect, useState } from 'react'
import Widget from '../Widget'
import OptionStyle from '../Option'
import Image from '../Image'
// import Animation from '../Animation'

type RadioOptionProps = {
    questionName: string,
    option: string,
    onSelect: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
    chosen: boolean,
    isCorrect: boolean | null
}

const RadioOption = ({questionName, option, onSelect, chosen, isCorrect}: RadioOptionProps) => (
    <OptionStyle as='label' chosen={chosen} isCorrect={chosen === false ? null : (chosen && isCorrect)} >
        <input type='radio' name={questionName} style={{ display: 'none'}} onClick={onSelect} />
        {option}
    </OptionStyle>
)

type QuestionObject = {
    image: string,
    resultImage: string,
    title: string,
    description: string,
    answer: number,
    alternatives: Array<string>
}

type QuestionProps = {
    question: QuestionObject,
    index: number,
    numberOfQuestions: number,
    onChoosenOptionCallback: Function,
    onBackPress: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Question = ({ question, index, numberOfQuestions, onChoosenOptionCallback, onBackPress }: QuestionProps) => {
    const [chosenOption, setChosenOption] = useState<number | null>(null)
    // console.log('CHOSEN OPTION: ', chosenOption)
    const { image, resultImage, title, description, answer, alternatives } = question
    const questionName = `question_${index}`
    // console.log('QUESTION ---- ', chosenOption, answer)

    const getResult = () => {
        if (chosenOption === null) return null
        const ret = (chosenOption === answer)
        return ret
    }

    const selectOption = (optionIndex: number) => {
        setChosenOption(optionIndex)
    }

    useEffect(() => {
        // console.log('DEU RENDER NO COMPONENT!!!!!!!!!!!!!!!!!!!!!!')
        if (chosenOption !== null) {
            setTimeout(() => {
                const hasChosenCorrectOption = getResult()
                // playAudio(hasChosenCorrectOption)
                onChoosenOptionCallback({ hasChosenCorrectOption, chosenOption })
            }, hasChosenCorrectOption ? 3000 : 2000)
        }
    })

    const hasChosenCorrectOption = getResult()
    const imagePath = chosenOption !== null ? resultImage : image

    return (
        <Widget>
            <Widget.Header>
                {index > 0 && <button onClick={onBackPress}>Voltar</button>}
                <h3>{`Pergunta ${index+1} de ${numberOfQuestions} `}</h3>
            </Widget.Header>
            <Image imagePath={imagePath} chosenOption={chosenOption} />
            
            <Widget.Content>
                <h3>{title}</h3>
                {alternatives.map((option: string, index: number) => {
                    return (
                        <RadioOption
                            questionName={questionName}
                            option={option}
                            chosen={chosenOption === index}
                            onSelect={() => selectOption(index)}
                            key={`option_${index}`}
                            isCorrect={hasChosenCorrectOption}
                        />
                    )
                })}
            </Widget.Content>
            {/* {chosenOption !== null && <Animation isCorrect={hasChosenCorrectOption} />} */}
        </Widget>
    )
}

export default Question