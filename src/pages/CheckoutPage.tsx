import { Flex, Text } from "@mantine/core"
import { CheckInfo } from "../components/check-info/CheckInfo"
import { CheckTotal } from "../components/check-total/CheckTotal"



export const CheckoutPage: React.FC<CheckoutPageProps> = () => {
  return (
    <div className="wrapper">
        <Flex direction='column' mt={44} mb={56} justify='center'>
            <Text size="xl" fw={500} ta='center'>Оформление заказа</Text>
            <Flex gap={20} mt={36} justify='center' align='flex-start'>
              <CheckInfo />
              <CheckTotal />
            </Flex>
        </Flex>
    </div>
  )
}
