/* eslint-disable @typescript-eslint/no-require-imports */

import type * as TServices from "@/services/api";

const isDevelopment = process.env.NODE_ENV !== "development";

const services: typeof TServices = isDevelopment
  ? require("@/services/api.development")
  : require("@/services/api");

export default services;
