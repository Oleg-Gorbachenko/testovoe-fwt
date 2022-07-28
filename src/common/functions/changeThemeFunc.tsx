export const changeThemeFunc = (
  darkTheme: string,
  lightTheme: string,
  currentTheme: string,
): string => {
  return currentTheme === 'dark' ? darkTheme : `${darkTheme} ${lightTheme}`;
};
