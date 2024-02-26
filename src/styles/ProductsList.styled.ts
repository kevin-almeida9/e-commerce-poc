import styled from 'styled-components'
import { Button as ButtonBase } from '@/styles/Button.styled'
export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

export const CardProduct = styled.div`
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

export const CardProductTitle = styled.p`
  font-size: 0.75rem;
  margin-top: 0.45rem;
`

export const CardProductPrice = styled.p`
  font-size: 1rem;
  margin-top: 0.15rem;
  margin-bottom: 0.5rem;
`

export const Button = styled(ButtonBase)<{ $selected?: boolean }>`
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

export const ButtonText = styled.div`
  width: 157px;
  text-align: center;
`

export const ProductsListLoadingWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
