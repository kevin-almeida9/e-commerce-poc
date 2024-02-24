import { ITheme } from '@/pages/_app'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
`

export const Logo = styled.h1`
  font-size: 1.25rem;
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-align: end;
`

export const CartTitle = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
`

export const CartSubtitle = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.textSecondaryColor || '#FFF'};
`

export default Header
