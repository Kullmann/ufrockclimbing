import { MantineThemeOverride, MantineProvider } from '@mantine/core';
import Layout from './components/Layout';

const myTheme: MantineThemeOverride = {
  colorScheme: 'light',
};

function App() {
  return (
    <MantineProvider theme={myTheme}>
      <Layout/>
    </MantineProvider>
  );
}

export default App;
