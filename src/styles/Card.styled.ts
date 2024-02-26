import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  padding: 4rem;

  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};

  @media screen and (max-width: 768px) {
    margin: 1rem;
    padding: 4rem 0;
  }
`

export const CardTitle = styled.h1`
  font-size: 1.25rem;
  height: 2.1875rem;

  @media screen and (max-width: 768px) {
    padding: 0 4rem;
  }
`
