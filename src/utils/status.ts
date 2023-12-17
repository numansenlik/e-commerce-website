export type Status = "IDLE" | "LOADING" | "SUCCESS" | "FAIL";

export const STATUS: { [key: string]: Status } = Object.freeze({
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
});