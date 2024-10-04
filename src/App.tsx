import './App.css'
import "@radix-ui/themes/styles.css";
import { Avatar, Flex, Popover, Text, Theme } from '@radix-ui/themes'

function App() {
  return (
    <Theme
      appearance="dark"
    >
      <Flex align="center" justify="center" gap="1" height="100vh">
        <Flex direction="column" align="center" gap="2">
          <Text>I work</Text>
          <Popover.Root>
            <Popover.Trigger>
              <Avatar
                size="6"
                src="https://randomuser.me/api/portraits/women/10.jpg"
                fallback="A"
              />
            </Popover.Trigger>
            <Popover.Content>
              <Text>Popover</Text>
            </Popover.Content>
          </Popover.Root>
        </Flex>

        <Flex direction="column" align="center" gap="2">
          <Text>I don't</Text>
          <Popover.Root>
            <Popover.Trigger>
              <Avatar
                size="6"
                fallback="A"
              />
            </Popover.Trigger>
            <Popover.Content>
              <Text>Popover</Text>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Flex>
    </Theme>
  )
}

export default App
