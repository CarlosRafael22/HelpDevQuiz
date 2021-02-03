import { Story, Meta } from '@storybook/react'
import GitHubCorner from '.'

export default {
    title: 'GitHubCorner',
    component: GitHubCorner
} as Meta

export const Default: Story = (args) => <GitHubCorner {...args}></GitHubCorner>
 