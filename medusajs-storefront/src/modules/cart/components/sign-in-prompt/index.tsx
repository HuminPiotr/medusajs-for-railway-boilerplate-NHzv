import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Posiadasz już konto?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
        Zaloguj się, aby uzyskać lepsze wrażenia.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/konto">
          <Button variant="secondary" className="h-10">
            Zaloguj się
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
