import styled from 'styled-components'

export const CartList = styled.table`
  padding: 1.5rem;
  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};
`

export const CartListTitle = styled.th`
  color: ${(props) => props.theme.textSecondaryColor};
  font-size: 0.875rem;
  text-align: start;
`

export const CartListRow = styled.tr`
  gap: 3.25rem;
`

export const CartListItemTitle = styled.p`
  text-wrap: nowrap;
  font-size: 0.875rem;
  font-weight: bold;
`

export const CartListItemValue = styled.p`
  font-size: 1rem;
  font-weight: bold;
`

export const CartListItemQuantity = styled.input`
  width: 3.875rem;
  height: 1.625rem;
  margin: 0 0.6875rem;
  border-radius: 0.25rem;
  border-color: ${(props) => props.theme.borderInputColor};
  border-style: solid;
  border-width: 0.0625rem; //1px
  padding: 0;
  text-align: center;
`

export const CartListTotalTitle = styled.p`
  font-size: 0.875rem;
  text-align: start;
`

export const CartListTotalValue = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  width: 130.79px;
`
