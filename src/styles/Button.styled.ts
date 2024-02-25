import styled from 'styled-components'

export const Button = styled.button<{ $width?: number | string }>`
  width: ${(props) => props.$width || '100%'};
  height: 2.5rem;

  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;

  border-radius: 4px;
  outline: none;
  border: none;

  cursor: pointer;
  color: ${(props) => props.theme.textPrimaryColor};
  background-color: ${(props) => props.theme.primaryColor};
`

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
