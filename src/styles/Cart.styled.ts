import styled from 'styled-components'

export const CartListWrapper = styled.div`
  padding: 1.5rem;
  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};
`

export const CartList = styled.table`
  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};
  table-layout: auto;
  width: 100%;
`

export const CartListTitle = styled.th`
  color: ${(props) => props.theme.textSecondaryColor};
  font-size: 0.875rem;
  text-align: start;
`

export const CartListRow = styled.tr`
  display: table-row;
`

export const CartListCell = styled.td<{ $width?: string }>`
  width: ${(props) => props.$width};
  padding: 1.3125rem 0;
  vertical-align: middle;
  display: table-cell;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.borderColor};

  &:not(:last-child) {
    padding-right: 3.25rem;
  }
`

export const CartListQuatityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
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

  border-radius: 0.25rem;
  border-color: ${(props) => props.theme.borderInputColor};
  border-style: solid;
  border-width: 0.0625rem; //1px
  padding: 0;
  text-align: center;
`

export const CartListTotalWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CartListTotalTitle = styled.p`
  font-size: 0.875rem;
  text-align: start;
  font-weight: bold;
  color: ${(props) => props.theme.textSecondaryColor};
`

export const CartListTotalValue = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  width: 130.79px;
`

export const CartListFooter = styled.div`
  padding-top: 1.3125rem;
  display: flex;
  justify-content: space-between;
`
