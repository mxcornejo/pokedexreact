import {PropsWithChildren, createContext} from 'react';

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {PaperProvider, adaptNavigationTheme} from 'react-native-paper';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const ThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
  const colorSheme = useColorScheme();

  const isDark = colorSheme === 'dark';
  const theme = isDark ? DarkTheme : LightTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider
          value={{
            isDark,
            theme,
          }}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};
