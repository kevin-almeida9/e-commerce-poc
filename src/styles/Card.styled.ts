import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  padding: 4rem;

  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};
`

export const CardTitle = styled.h1`
  font-size: 1.25rem;
  height: 2.1875rem;
`
