import { Meta, Story } from "@storybook/react";
import colors from "../../colors.json";

import { CardIcon } from ".";
import { Card } from "../../../game";

export default {
  title: "Card/Icon",
  component: CardIcon,
  argTypes: {
    suit: {
      control: {
        type: "select",
        options: colors.map((c) => c.name),
      },
    },
    rank: {
      control: {
        type: "number",
        min: 1,
        max: 5,
        step: 1,
      },
    },
    card: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    actions: { disabled: true },
  },
} as Meta;

export const CardIconStory: Story<Card> = ({ rank, suit }) => (
  <span
    style={{
      color: "white",
      fontFamily: "Consolas, monospace",
      fontSize: "40px",
    }}
  >
    Alice played <CardIcon card={{ rank, suit }} /> from Slot 1
  </span>
);
CardIconStory.args = { rank: 1, suit: "Red" };
CardIconStory.storyName = "Icon";