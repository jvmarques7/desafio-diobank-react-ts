import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface ICButton {
  onClick: MouseEventHandler
}

export const CButton = ({onClick}:  ICButton) => {
    return(
      <Button
        onClick={onClick}
        colorScheme="teal"
        size="sm"
        width="100%"
        marginTop="5px"
      >
        Log In
      </Button>
    )
}

export default CButton
