import IconButton from "../IconButton";
import messageSvg from "../../assets/message-white.svg";

export default {
  title: "Button/Icon",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const MessageIcon = {
  args: {
    iconSrc: messageSvg,
  },
};
