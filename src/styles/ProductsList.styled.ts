import styled from 'styled-components'

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1.75rem;
`

export const Card = styled.div`
  flex: 1 1 280px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};

  padding: 0.63rem 0.7rem;
  border-radius: 4px;
`

export const CardTitle = styled.p`
  font-size: 0.75rem;
  margin-top: 0.45rem;
`

export const CardPrice = styled.p`
  font-size: 1rem;
  margin-top: 0.15rem;
  margin-bottom: 0.5rem;
`

export const Button = styled.button<{ $selected?: boolean }>`
  width: 100%;
  height: 2.5rem;

  font-size: 0.75rem;
  font-weight: bold;

  border-radius: 4px;
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  color: ${(props) => props.theme.textPrimaryColor};
  background-color: ${(props) =>
    props.$selected ? props.theme.secondaryColor : props.theme.primaryColor};

  cursor: ${(props) => (props.$selected ? 'not-allowed' : 'pointer')};
`

export const ButtonCounter = styled.div`
  display: flex;
  align-items: end;
  gap: 0.25rem;
`
