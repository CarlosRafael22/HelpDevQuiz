import * as Style from './styles'

const Main = ({
  title = 'React Avançado - Boilerplate',
  description = 'TypeScript, ReactJS, NextJS, Storybook and Styled Components in the same project',
}) => (
  <Style.Wrapper>
    <Style.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </Style.Wrapper>
)

export default Main
