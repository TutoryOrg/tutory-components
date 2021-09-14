import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { lightTheme, darkTheme } from '../src/styles/theme';

const themes = [lightTheme, darkTheme];

// pass ThemeProvider and array of your themes to decorator
// addDecorator(withThemes(ThemeProvider, themes));

export const onThemeSwitch = context => {
  const { theme } = context;
  const background = theme.name === 'dark' ? '#566573' : 'white';
  const parameters = {
    backgrounds: {
      default: background,
    },
  };
  return {
    parameters,
  };
};

addDecorator(withThemes(ThemeProvider, themes, { onThemeSwitch }));
