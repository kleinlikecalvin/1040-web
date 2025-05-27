import { describe, it, expect } from "vitest";
import { filingStatusSchema, foreignStuffSchema } from "./formSchema";

const base = {
  "single-filing-status": false,
  "head-filing-status": false,
  "joint-filing-status": false,
  "separately-filing-status": false,
  "qss-filing-status": false,
  "dependent-filing-status": false,
  "dependent-name": "",
  "alien-filing-status": false,
  "alien-dependent-name": "",
};

describe("filingStatusSchema", () => {
  it("passes when only one status is true", () => {
    const data = { ...base, "single-filing-status": true };
    expect(() => filingStatusSchema.parse(data)).not.toThrow();

    const data2 = { ...base, "joint-filing-status": true };
    expect(() => filingStatusSchema.parse(data2)).not.toThrow();
  });

  it("fails when more than one status is true", () => {
    const data = {
      ...base,
      "single-filing-status": true,
      "joint-filing-status": true,
    };
    expect(() => filingStatusSchema.parse(data)).toThrow();

    const data2 = {
      ...base,
      "head-filing-status": true,
      "qss-filing-status": true,
    };
    expect(() => filingStatusSchema.parse(data2)).toThrow();
  });

  it("fails when no status is true", () => {
    expect(() => filingStatusSchema.parse(base)).toThrow();
  });
});

describe("foreignStuffSchema", () => {
  it("passes with all required foreign fields present and valid", () => {
    const data = {
      "foreign-country-name": "Canada",
      "foreign-country": "QC",
      "foreign-postal-code": "H2X 1Y4",
    };
    expect(() => foreignStuffSchema.parse(data)).not.toThrow();
  });

  it("passes with all required foreign fields empty (alternate branch)", () => {
    const data = {
      "foreign-country-name": "",
      "foreign-country": "",
      "foreign-postal-code": "",
    };
    expect(() => foreignStuffSchema.parse(data)).not.toThrow();
  });

  it("fails with a mixed bag (some valid, some empty)", () => {
    const data = {
      "foreign-country-name": "France",
      "foreign-country": "",
      "foreign-postal-code": "",
    };
    expect(() => foreignStuffSchema.parse(data)).toThrow();
  });

  it("fails with a missing field", () => {
    const data = {
      "foreign-country-name": "France",
      "foreign-country": "Île-de-France",
      // "foreign-postal-code" missing
    };
    expect(() => foreignStuffSchema.parse(data)).toThrow();
  });
});
