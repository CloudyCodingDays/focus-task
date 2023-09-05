export const GetThemeStyle = (
  color: string | undefined,
  mode: string | undefined,
) => {
  if (color !== undefined && mode !== undefined) {
    return [`theme-${color}`, `theme-${mode}`].filter(Boolean).join(" ");
  }
  return "";
};
