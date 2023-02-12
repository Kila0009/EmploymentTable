import { Flex } from "@mantine/core"

interface DateCellProps {
    date: Date
}

export default function DateCell({ date }: DateCellProps): JSX.Element {
    
    return (
        <td style={{ padding: 20}}>
            <Flex>
                {
                    date.getDate()
                }
                {
                    date.toLocaleString('ru', { month: 'short' })
                }
            </Flex>
        </td>
    )
}