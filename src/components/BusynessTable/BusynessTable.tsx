import { Container, ScrollArea, Table, Flex } from "@mantine/core";
import CalendarInput from "../Calendar/Calendar";


export default function BusynessTable(){

    const monthesColumns = (
        <>
            {
                ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'  ].map((month, index) => {
                    return <th key={index} style={{ padding: '10px 30px', textAlign: 'center', minWidth: 80, textTransform: 'capitalize', border: '1px solid #0D3F3E' }}>{month}</th>
                })
            }
        </>
    )
    
    const weekDayColumns = (
        <>
            {
                ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс',
                'пн', 'вт'].map((weekDay, index) => {
                    return <th key={index} style={{ padding: '10px 30px', textAlign: 'center', minWidth: 80, textTransform: 'capitalize', border: '1px solid #0D3F3E' }}>{weekDay}</th>
                })
            }
        </>
    )
    
    

    
    
    return(
        <div>
        <Container w={'100%'}>
        <Flex justify="center" style={{marginBottom: '20px'}} gap='md'>
            <CalendarInput />
            
                <ScrollArea style={{overflow: 'hidden', height: '500px', }}>
                    <Table>
                        <thead>
                            <tr>
                                {monthesColumns}
                            </tr>
                            
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </Table>
                </ScrollArea>
        </Flex>
        </Container>
        </div>
    );
}