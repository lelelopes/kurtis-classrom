import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/fileUrl',
    },
  },
  args: {
    title: 'Logo',
  },
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => {
  return (
    <div>
      <Logo {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  size: 'medium',
}

export const Secondary = Template.bind({})
Secondary.parameters = {
  backgrounds: {
    default: 'dark',
  },
}
Secondary.args = {
  color: 'secondary',
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  color: 'primary',
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  color: 'primary',
  size: 'small',
}
