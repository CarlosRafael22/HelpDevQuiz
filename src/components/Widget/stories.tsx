import { Story, Meta } from '@storybook/react'
import Widget from '.'

export default {
    title: 'Widget',
    component: Widget
} as Meta

export const Default: Story = (args) => (
    <Widget>
        <Widget.Header>Testing Header</Widget.Header>
        <Widget.Content>Testing Content</Widget.Content>
    </Widget>
)