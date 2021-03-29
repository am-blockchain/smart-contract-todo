import {FC} from 'react'

import { useWeb3 } from 'utils/hooks'
import GameContract from '@witcher-poker/contracts/build/contracts/Game.json'

export const Home: FC = () => {
  const web3 = useWeb3()

  console.log(web3.defaultAccount)
  console.log(web3.eth.accounts)

  return <div>Home!</div>
}
