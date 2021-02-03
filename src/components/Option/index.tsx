import styled, { css } from 'styled-components'

type OptionStyleProps = {
    isCorrect: boolean | null,
    chosen?: boolean
}

const OptionStyle = styled.a<OptionStyleProps>`
    display: block;
    border-radius: 0.5rem;
    background-color: ${({ theme, isCorrect }) => {
        if (isCorrect === null) return `${theme.colors.primary}40`
        return isCorrect ? theme.colors.success : theme.colors.wrong
    }};
    margin: 1rem 0;
    padding: 0.5rem;
    outline: 0;
    text-decoration: none;

    
    ${({ isCorrect }) => {
        if (isCorrect === null) return css`
            cursor: pointer;
            &:hover,
            &:focus {
                opacity: .5;
            }
        `
    }}
    ${({ chosen }) => chosen && css`opacity: .5`}
`

export default OptionStyle