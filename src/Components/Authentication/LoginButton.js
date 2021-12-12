import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@blueprintjs/core';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return(
    <div>
      <Button className="bp3-large" onClick={() => loginWithRedirect()}>
        Login
      </Button>
    </div>
  )
}

export default LoginButton;