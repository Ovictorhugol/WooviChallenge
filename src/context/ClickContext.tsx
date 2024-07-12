import React from ‘react’;

import { lightTheme, darkTheme } from ‘../../styles/themes’;
const ThemeContext: React.FC = ({ children }) => {
 const { theme } = useThemeMode();const themeMode = theme === ‘dark’ ? darkTheme : lightTheme;return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};export default ThemeContext;