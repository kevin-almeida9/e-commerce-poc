import { theme } from '@/pages/_app'
import { ButtonIcon } from '@/styles/Button.styled'
import { useMemo } from 'react'

enum IconName {
  add_shopping_cart = 'add_shopping_cart',
  shopping_basket = 'shopping_basket',
  add_circle = 'add_circle',
  do_not_disturb_on = 'do_not_disturb_on',
  delete = 'delete',
}

enum IconStyle {
  'material-symbols-fill',
  'material-symbols-outlined',
  'material-icons',
}

type Props = {
  name: keyof typeof IconName
  material?: keyof typeof IconStyle
  className?: string
  size?: string | number
  color?: string
  onClick?: () => void
}

function IconButton({
  name,
  className = '',
  color = theme.textPrimaryColor,
  size = 32,
  onClick,
  ...rest
}: Omit<Props, 'material'>) {
  return (
    <ButtonIcon
      className={className}
      style={{
        fontSize: size,
        color: color,
      }}
      onClick={() => onClick?.()}
      {...rest}
    >
      {name}
    </ButtonIcon>
  )
}

function IconSpan({
  name,
  className = '',
  color = theme.textPrimaryColor,
  size = 32,
  ...rest
}: Omit<Props, 'onClick' | 'material'>) {
  return (
    <span
      className={className}
      style={{
        fontSize: size,
        color: color,
      }}
      {...rest}
    >
      {name}
    </span>
  )
}

function Icon({
  onClick,
  material = 'material-symbols-fill',
  className: customClassName = '',
  ...rest
}: Props) {
  const className = useMemo(() => {
    if (material === 'material-icons') return `${material}  ${customClassName}`
    return `material-symbols-outlined ${material} ${customClassName}`
  }, [material, customClassName])

  if (onClick)
    return <IconButton {...rest} className={className} onClick={onClick} />
  return <IconSpan {...rest} className={className} />
}

export default Icon
