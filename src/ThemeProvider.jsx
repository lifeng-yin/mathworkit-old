import { MantineProvider } from '@mantine/core';

export const theme = {
  colorScheme: 'light',
};

export const ThemeProvider = ({ children }) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}