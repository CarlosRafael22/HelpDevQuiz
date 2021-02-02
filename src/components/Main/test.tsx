import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render a heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the background correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
