import { theme } from '@/pages/_app'

enum IconName {
  add_shopping_cart = 'add_shopping_cart',
  shopping_basket = 'shopping_basket',
}

function Icon({
  name,
  className = '',
  color,
  size = 32,
  ...rest
}: {
  name: keyof typeof IconName
  className?: string
  size?: string | number
  color?: string
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontSize: size,
        color: color || theme.textPrimaryColor,
      }}
      {...rest}
    >
      {name}
    </span>
  )
}

export default Icon
