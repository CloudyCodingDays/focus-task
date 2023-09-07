"use client";
import useThemeContext from "@/hooks/useThemeContext";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui_components/radio-group";

const ThemeSelector = () => {
  const { color, setColor } = useThemeContext();
  const themeList = [
    {
      name: "Forest Theme",
      active: color === "green",
      value: "green",
      type: "color",
    },
    {
      name: "Blue Theme",
      active: color === "blue",
      value: "blue",
      type: "color",
    },
    {
      name: "Red Theme",
      active: color === "red",
      value: "red",
      type: "color",
    },
  ];

  return (
    <div className="flex flex-col">
      <RadioGroup defaultValue={color}>
        {themeList.map((themeItem) => (
          <div key={themeItem.name}>
            <div className="flex flex-row items-center">
              <RadioGroupItem
                onClick={() => {
                  if (setColor !== undefined) setColor(themeItem.value);
                }}
                value={themeItem.value}
                id={themeItem.value}
                className="mr-2"
              />
              <div>{themeItem.name}</div>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
export default ThemeSelector;
