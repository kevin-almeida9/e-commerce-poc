import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  margin-bottom: 1.75rem;
`

export const Logo = styled.button`
  display: block;
  font-weight: bold;
  font-size: 1.25rem;

  color: ${(props) => props.theme.textPrimaryColor};
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const CartWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-align: end;

  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textPrimaryColor};
`

export const CartTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
`

export const CartSubtitle = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.textSecondaryColor};
`
