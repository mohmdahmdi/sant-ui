/* eslint-disable @typescript-eslint/no-require-imports */
// import type * as TServices from "@/api/api";
import moment, { Moment } from "moment-jalaali";
import axios from "axios";
import { instance } from "@/api/AxiosConfig";

const isDevelopment = process.env.NODE_ENV === "development";

let services;
if (isDevelopment) {
  services = require("@/api/api.development");
} else {
  services = require("@/api/api");
}

const {} = services;
