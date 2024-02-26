import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import loadSpinnerIcon from '@/assets/load-spinner.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  width: 5.1875rem;
  height: 5.1875rem;
`

function Loading() {
  return (
    <Rotate>
      <Image
        priority
        src={loadSpinnerIcon}
        alt="Ícone de carregamento giratório "
      />
    </Rotate>
  )
}

export default Loading
