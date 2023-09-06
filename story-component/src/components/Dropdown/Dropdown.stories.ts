import Dropdown from ".";
import { ROLES } from "./data";

export default {
  title: "Dropdown/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {
    options: ROLES,
  },
};
