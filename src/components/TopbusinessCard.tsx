import React from "react";
import { TopBusinesses } from "../services/api";

const TopbusinessCard = ({ data }: { data: TopBusinesses}) => {
  return <div>{data.name}</div>;
};

export default TopbusinessCard;
