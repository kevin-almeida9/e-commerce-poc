import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import loadSpinnerIcon from '@/assets/load-spinner.svg'

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
  font-size: 1.2rem;
  background-color: #fff;
`

function Loading() {
  return (
    <Rotate>
      <Image
        priority
        src={loadSpinnerIcon}
        height={60}
        width={60}
        alt="Ícone de carregamento giratório "
      />
    </Rotate>
  )
}

export default Loading
