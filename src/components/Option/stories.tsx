import { Story, Meta } from '@storybook/react'
import Option, { OptionStyleProps } from '.'

export default {
    title: 'Option',
    component: Option
} as Meta

const Template: Story<OptionStyleProps> = (args: OptionStyleProps) => <Option {...args}>Choose me</Option>

export const Default = Template.bind({})
Default.args = {
    isCorrect: null
}

export const Chosen = Template.bind({})
Chosen.args = {
    ...Default.args,
    chosen: true
}