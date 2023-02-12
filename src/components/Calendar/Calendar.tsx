import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons';
import { ActionIcon, Flex, Stack } from '@mantine/core';
import { IconClock } from '@tabler/icons';
import AccordionCategory from '../Accordion/AccordionCategory';
import { useState } from 'react';

export default function CalendarInput() {
    
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const handleClick = () => {
        console.log(selectedDate);
    }

    return (
        <div>
            <Stack spacing='xs'>
                <Flex
                gap='xs'
                align="center">
                    <DatePicker
                    locale="ru"
                    placeholder= {new Date().toLocaleDateString()}
                    defaultValue={new Date()}
                    onChange={(date) => setSelectedDate(date)}
                    icon={ <IconCalendar/>}
                    style={{width: '200px'}}
                    size='sm'/>
                    <ActionIcon color='dark' variant='filled' size='lg'  onClick={handleClick}><IconClock /></ActionIcon>
                </Flex>
                <AccordionCategory/>
            </Stack>
        </div>
    );
}