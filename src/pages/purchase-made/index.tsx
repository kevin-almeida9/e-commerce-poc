import { Button } from '@/styles/Button.styled'
import Image from 'next/image'
import { useRouter } from 'next/router'
import purchaseFinalizedSVG from '@/assets/purchase-finalized.svg'
import { Card, CardTitle } from '@/styles/Card.styled'

function PurchaseMade() {
  const router = useRouter()
  return (
    <Card>
      <CardTitle>Compra realizada com sucesso!</CardTitle>
      <Image
        src={purchaseFinalizedSVG}
        alt="Um ícone representando a finalização da compra."
      />
      <Button
        $width={'180px'}
        $fontSize="0.875rem"
        onClick={() => {
          router.push('/')
        }}
      >
        VOLTAR
      </Button>
    </Card>
  )
}

export default PurchaseMade
