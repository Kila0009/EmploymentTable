import BusynessTable from '@/components/BusynessTable/BusynessTable';
import { Center, Container, Paper } from '@mantine/core';

export default function Home() {
  return(
    <Container size="md">
      <Center style={{width: '100%', height: '100vh'}}>
      <Paper shadow="lg" radius="md" p="md" withBorder>
          <BusynessTable />
        </Paper>
      </Center>
    </Container>
  )
}