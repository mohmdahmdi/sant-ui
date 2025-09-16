import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Kpi, KpiProps } from "./Kpi";
import {
  FaChartLine,
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
} from "react-icons/fa";

const meta: Meta<KpiProps> = {
  title: "Components/Kpi",
  component: Kpi,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<KpiProps>;

// ✅ Typed correctly with ReactNode, no TS2749 error
const baseData: KpiProps["data"] = [
  {
    icon: <FaChartLine size={32} />,
    title: "Revenue",
    description: "$1.2M total revenue this quarter",
  },
  {
    icon: <FaUsers size={32} />,
    title: "Users",
    description: "15K active users monthly",
  },
  {
    icon: <FaDollarSign size={32} />,
    title: "Profit",
    description: "35% profit margin achieved",
  },
  {
    icon: <FaShoppingCart size={32} />,
    title: "Orders",
    description: "2.4K orders processed",
  },
];

export const Primary: Story = {
  args: {
    primary: true,
    color: "primary",
    data: baseData,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    color: "secondary",
    data: baseData,
  },
};

export const Accent: Story = {
  args: {
    primary: true,
    color: "accent",
    data: baseData,
  },
};

export const Neutral: Story = {
  args: {
    primary: false,
    color: "neutral",
    data: baseData,
  },
};

export const CustomData: Story = {
  args: {
    primary: true,
    color: "primary",
    data: [
      {
        icon: FaChartLine,
        title: "Growth",
        description: "25% YoY growth",
      },
      {
        icon: FaUsers,
        title: "Retention",
        description: "85% customer retention",
      },
      {
        icon: FaDollarSign,
        title: "ROI",
        description: "3.2x return on investment",
      },
      {
        icon: FaShoppingCart,
        title: "Conversion",
        description: "12% conversion rate",
      },
    ],
  },
};
