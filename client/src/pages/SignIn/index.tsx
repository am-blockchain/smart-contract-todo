import {FC, ReactNode} from 'react'
import {useMetaMask} from 'metamask-react'
import { Redirect } from 'react-router-dom'

import { sitemap } from 'sitemap'

export const SignIn: FC = () => {
  const {status, connect} = useMetaMask()

  let children: ReactNode

  switch (status) {
    case 'connected':
      children = <Redirect to={sitemap.home} />
      break;
    case 'unavailable':
      children = <div>Metamask is not installed, please install and refresh the page.</div>
      break;
    case 'notConnected':
      children = <div>Click <button onClick={connect}>here</button> to connect to MetaMask.</div>
      break;
    case 'initializing':
    case 'connecting':
      // This shouldn't actually happen but we can handle by showing a loading indicator
      children = <div>Loading...</div>
      break;
    default:
      children = <div>Unknown status: {status}</div>
      break;
  }

  return <div>{children}</div>
}
