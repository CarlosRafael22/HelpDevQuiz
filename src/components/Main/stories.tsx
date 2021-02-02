import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'React Avancado/Main',
  component: Main,
} as Meta

export const Default: Story = (args) => <Main {...args} />

export const WithProps = Default.bind({})
WithProps.args = {
  title: 'Hello',
  description: 'Description',
}
