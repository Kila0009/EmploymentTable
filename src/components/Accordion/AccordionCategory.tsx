import { Accordion, Text, createStyles} from '@mantine/core';


const useStyles = createStyles((theme) => ({
  maintext:{
    fontWeight: 500
  }
}));

export default function AccordionCategory() {
  const {classes} = useStyles();

  return (
    <Accordion chevronPosition="left" multiple variant='contained' radius='md'>
      <Accordion.Item value="Категории">
        <Accordion.Control><Text className={classes.maintext}>Категории номеров</Text></Accordion.Control>
        <Accordion.Panel>

          <Accordion.Item value='Студия'>
            <Accordion.Control><Text className={classes.maintext}>Студия с одной кроватью</Text></Accordion.Control>
            <Accordion.Panel>Студия info</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='Делюкс'>
            <Accordion.Control><Text className={classes.maintext}>Делюкс</Text></Accordion.Control>
            <Accordion.Panel>Делюкс info</Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value='Полулюкс'>
            <Accordion.Control><Text className={classes.maintext}>Полулюкс четырехместный</Text></Accordion.Control> 
            <Accordion.Panel>Полулюкс info</Accordion.Panel>
          </Accordion.Item>

        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}