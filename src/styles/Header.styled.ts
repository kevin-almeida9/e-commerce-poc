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
  padding: 0;

  text-align: end;

  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textPrimaryColor};
`

export const CartTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  height: 1.1875rem;
  padding-right: 0.1875rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const CartSubtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  height: 1.1875rem;
  padding-right: 0.1875rem;
  color: ${(props) => props.theme.textSecondaryColor};
`
