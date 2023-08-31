"use client";
import useThemeContext from "@/hooks/useThemeContext";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ThemeSelector = () => {
  const { color, setColor, mode, setMode } = useThemeContext();
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
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  if (setColor !== undefined) setColor(themeItem.value);
                }}
              >
                <RadioGroupItem
                  value={themeItem.value}
                  id={themeItem.value}
                  className="mr-2"
                />
                <Label htmlFor={themeItem.value}>{themeItem.name}</Label>{" "}
              </button>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
export default ThemeSelector;
