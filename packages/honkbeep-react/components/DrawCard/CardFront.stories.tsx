import { Meta, Story } from "@storybook/react";
import colors from "../../colors.json";

import { CardFront } from ".";
import { CardFace } from "../../../game";

export default {
  title: "Card/Front",
  component: CardFront,
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
    borderOverride: { control: "color" },
    card: { table: { disable: true } },
  },
  parameters: {
    layout: "centered",
    actions: { disabled: true },
  },
} as Meta;

export const HBCardFrontStory: Story<CardFace> = ({ rank, suit }) => (
  <CardFront height="200px" face={{ rank, suit }} />
);
HBCardFrontStory.args = { rank: 1, suit: "Red" };
HBCardFrontStory.storyName = "Front";