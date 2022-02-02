import { Story, Meta } from '@storybook/react/types-6-0'
import Header from '.'

export default {
  title: 'Header',
  component: Header,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oDgQyWOou0beMgQTbPYblY/Landing-page-for-educational-app-(Community)?node-id=303%3A115',
    },
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Header {...args} />
  </div>
)
