import { Story, Meta } from '@storybook/react'
import Button from '.'

export default {
    title: 'Button',
    component: Button
} as Meta

export const Default: Story = (args) => <Button {...args}>Testing text</Button>