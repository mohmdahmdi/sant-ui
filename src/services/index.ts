/* eslint-disable @typescript-eslint/no-require-imports */

import type * as TServices from "@/services/api";

const isDevelopment = process.env.NODE_ENV === "development";

const services: typeof TServices = isDevelopment
  ? require("@/api/api.development")
  : require("@/api/api");

export default services;
