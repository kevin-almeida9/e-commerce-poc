import styled from 'styled-components'

export const CartListWrapper = styled.div`
  padding: 1.5rem;
  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};

  border-radius: 4px;
  max-width: 950px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 1rem;
    padding: 1.5rem;
    height: 100%;
  }
`

export const CartList = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.textCardColor};
  background-color: ${(props) => props.theme.cardBackground};
`

export const CartListHeaderWrapper = styled.div`
  display: flex;
  gap: 1.3125rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartListTitleColumn = styled.div<{ $column?: string }>`
  flex-grow: ${(props) => props.$column || 1};
  color: ${(props) => props.theme.textSecondaryColor};
  font-size: 0.875rem;
  font-weight: bold;
  text-align: start;
`

export const CartListRow = styled.div`
  display: flex;
  gap: 1.3125rem;
  padding: 1.3125rem 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.borderColor};

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`

export const CartListCell = styled.div<{
  $width?: string
  $column?: string
  $direction?: 'row' | 'column'
  $rowAligh?: 'flex-start' | 'center' | 'flex-end'
}>`
  width: ${(props) => props.$width};
  flex-grow: ${(props) => props.$column};
  flex-direction: ${(props) => props.$direction};

  display: flex;
  align-items: ${(props) =>
    props.$direction === 'column' ? props.$rowAligh || 'flex-start' : 'center'};
  justify-content: ${(props) =>
    props.$direction === 'column' ? 'center' : props.$rowAligh || 'flex-start'};
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

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`
