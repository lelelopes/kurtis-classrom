import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/oDgQyWOou0beMgQTbPYblY/Landing-page-for-educational-app-(Community)?node-id=303%3A113',
    },
  },
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <div>
      <Button {...args} />
    </div>
  )
}

export const Default = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  size: 'small',
}

export const Outline = Template.bind({})
Outline.args = {
  variant: 'outline',
  size: 'small',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  size: 'small',
  children: 'Write the code here',
  icon: <RightArrowAlt />,
}

WithIcon.argTypes = {
  size: {
    type: 'string',
  },
}

WithIcon.parameters = {
  backgrounds: {
    default: 'dark',
  },
}
