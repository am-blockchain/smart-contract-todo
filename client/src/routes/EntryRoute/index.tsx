import {FC, ReactNode} from 'react'
import {Route, RouteProps, Redirect} from 'react-router-dom'
import {useMetaMask} from 'metamask-react'

import { sitemap } from 'sitemap'

type EntryRouteProps = RouteProps

export const EntryRoute: FC<EntryRouteProps> = (props) => {
  const {status} = useMetaMask()

  let children: ReactNode

  if (status === 'initializing') {
    children = <div>Loading</div>
  } else if (status === 'connected') {
    children = <Redirect to={sitemap.home} />
  } else {
    children = props.children
  }

  return <Route {...props}>{children}</Route>
}
