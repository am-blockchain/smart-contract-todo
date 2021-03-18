import { useMemo } from "react"
import { useMetaMask } from "metamask-react"
import Web3 from "web3"

export const useWeb3 = () => {
  const {ethereum} = useMetaMask()

  return useMemo(() => {
    return new Web3(ethereum)
  }, [ethereum])
}
