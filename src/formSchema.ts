import { z } from "zod";

export type FormSchema = {
  "1099-tax-witheld": string;
  "2025-applied-taxes": string;
  "4972": boolean;
  "8814": boolean;
  "8888-attached": boolean;
  "add-12-and-13": string;
  "add-16-and-18": string;
  "add-19-and-20": string;
  "add-25a-thru-25c": string;
  "add-lines": string;
  "additional-child-tax-credit": string;
  "additional-income": string;
  "adjusted-gross": string;
  adjustments: string;
  "alien-dependent-name": string;
  "alien-filing-status": boolean;
  "alien-or-spouse-itemizes-separately": boolean;
  "amount-from-schedule-2": string;
  "amount-from-schedule-3": string;
  "amount-overpaid": string;
  "amount-owed": string;
  "apt-num": string;
  "blind-af": boolean;
  "business-income": string;
  "capital-gain-loss-non-req": boolean;
  "capital-gain-loss-req": string;
  checking: boolean;
  "child-tax-credit": boolean;
  city: string;
  "combat-payments": string;
  "credit-for-other-deps": boolean;
  "dependent-filing-status": boolean;
  "dependent-name": string;
  "dependents-section-first-name": string;
  "dependents-section-last-name": string;
  "dependents-section-relationship": string;
  "dependents-section-ssn": string;
  "earned-credit": string;
  "employee-wages": string;
  "employer-adoption-benefits": string;
  "exempt-interest": string;
  "first-name-and-middle-initial": string;
  "foreign-country": string;
  "foreign-country-name": string;
  "foreign-postal-code": string;
  "head-filing-status": boolean;
  "home-address": string;
  "i-fund-presidential-campaign": boolean;
  "income-total-amount": string;
  "ira-dist": string;
  "joint-filing-status": boolean;
  "last-name": string;
  "line-34-refund-amount": string;
  "lump-sum-election": boolean;
  "manual-form-number-checkbox": boolean;
  "manual-form-number-input": string;
  "medicaid-waiver-payments": string;
  "no-digital-assets": boolean;
  "not-important": string;
  "old-af": boolean;
  "op-credit": string;
  "ordinary-dividends": string;
  "other-forms-tax-witheld": string;
  "other-income": string;
  "other-taxes": string;
  "pensions-annuities": string;
  "qss-filing-status": boolean;
  "qualified-dividends": string;
  "routing-number": string;
  "savings-account": boolean;
  "savings-number": string;
  "schedule-3-amount": string;
  "separately-filing-status": boolean;
  "single-filing-status": boolean;
  "someone-claims-me-as-dependent": boolean;
  "someone-claims-spouse-as-dependent": boolean;
  "spouse-blind-af": boolean;
  "spouse-first-name-and-middle-initial": string;
  "spouse-fund-presidential-campaign": boolean;
  "spouse-last-name": string;
  "spouse-old-af": boolean;
  "spouse-ssn": string;
  "ss-benefits": string;
  ssn: string;
  "standard-deduction": string;
  state: string;
  "subtract-21-from-18": string;
  tax: string;
  "tax-payments-and-2023-return": string;
  "tax-penalty": string;
  "tax-witheld": string;
  "taxable-amount-1": string;
  "taxable-amount-2": string;
  "taxable-amount-3": string;
  "taxable-dependent-benefits": string;
  "taxable-income": string;
  "taxable-interest": string;
  "the-rest-of-not-important": string;
  "tip-income": string;
  "total-income": string;
  "total-other-payments-and-refund-credits": string;
  "total-payments": string;
  "total-taxes": string;
  "wages-from-form": string;
  "yes-digital-assets": boolean;
  "zip-code": string;
};

export const personalFormSchema = z.object({
  "first-name-and-middle-initial": z.string(),
  "last-name": z.string(),
  ssn: z.string().regex(/^\d\d\d-\d\d-\d\d\d\d$/),
  "home-address": z.string(),
  "apt-num": z.string().optional(),
  city: z.string(),
  state: z.string(),
  "zip-code": z.string(),

  // Presidential Election Campaign
  "i-fund-presidential-campaign": z.boolean(),
  "spouse-fund-presidential-campaign": z.boolean(),
});

export const foreignStuffSchema = z.union([
  z.object({
    "foreign-country-name": z.string().min(1),
    "foreign-country": z.string().min(1),
    "foreign-postal-code": z.string().min(1),
  }),
  z.object({
    "foreign-country-name": z.string().max(0),
    "foreign-country": z.string().max(0),
    "foreign-postal-code": z.string().max(0),
  }),
]);

export const spouseFormSchema = z.object({
  //either required or not
  "spouse-first-name-and-middle-initial": z.string(),
  "spouse-last-name": z.string(),
  "spouse-ssn": z.string().regex(/^\d\d\d-\d\d-\d\d\d\d$/),
});

export const filingStatusSchema = z
  .object({
    // Filing Status
    "single-filing-status": z.boolean(),
    "head-filing-status": z.boolean(),
    "joint-filing-status": z.boolean(),
    "separately-filing-status": z.boolean(),
    "qss-filing-status": z.boolean(),
    "dependent-filing-status": z.boolean(),
    "dependent-name": z.string(),
    "alien-filing-status": z.boolean(),
    "alien-dependent-name": z.string(),
  })
  .refine((data) => {
    const values = Object.values(data);
    let validity = false;

    for (let i = 0; i < values.length; i++) {
      if (values[i] === true && validity === false) {
        validity = true;
      } else if (values[i] === true && validity === true) {
        return false;
      }
    }

    return validity;
  });

export const formSchema = z.object({
  "not-important": z.string(),
  "the-rest-of-not-important": z.string(),

  // Digital Assets
  "yes-digital-assets": z.boolean(),
  "no-digital-assets": z.boolean(),

  // Standard Deduction
  "someone-claims-me-as-dependent": z.boolean(),
  "someone-claims-spouse-as-dependent": z.boolean(),
  "alien-or-spouse-itemizes-separately": z.boolean(),

  // Age/Blindness
  "old-af": z.boolean(),
  "blind-af": z.boolean(),
  "spouse-old-af": z.boolean(),
  "spouse-blind-af": z.boolean(),

  // Dependents (repeat as needed)
  "dependents-section-first-name": z.string(),
  "dependents-section-last-name": z.string(),
  "dependents-section-relationship": z.string(),
  "dependents-section-ssn": z.string(),

  // Income
  "income-total-amount": z.string(),
  "employee-wages": z.string(),
  "tip-income": z.string(),
  "medicaid-waiver-payments": z.string(),
  "taxable-dependent-benefits": z.string(),
  "employer-adoption-benefits": z.string(),
  "wages-from-form": z.string(),
  "other-income": z.string(),
  "combat-payments": z.string(),
  "add-lines": z.string(),
  "exempt-interest": z.string(),
  "taxable-interest": z.string(),
  "qualified-dividends": z.string(),
  "ordinary-dividends": z.string(),
  "ira-dist": z.string(),
  "taxable-amount-1": z.string(),
  "pensions-annuities": z.string(),
  "taxable-amount-2": z.string(),
  "ss-benefits": z.string(),
  "taxable-amount-3": z.string(),
  "lump-sum-election": z.boolean(),
  "capital-gain-loss-req": z.string(),
  "capital-gain-loss-non-req": z.boolean(),
  "additional-income": z.string(),
  "total-income": z.string(),
  adjustments: z.string(),
  "adjusted-gross": z.string(),
  "standard-deduction": z.string(),
  "business-income": z.string(),
  "add-12-and-13": z.string(),
  "taxable-income": z.string(),

  // Tax
  tax: z.string(),
  "8814": z.boolean(),
  "4972": z.boolean(),
  "manual-form-number-checkbox": z.boolean(),
  "manual-form-number-input": z.string(),
  "amount-from-schedule-2": z.string(),
  "add-16-and-18": z.string(),
  "child-tax-credit": z.boolean(),
  "amount-from-schedule-3": z.string(),
  "add-19-and-20": z.string(),
  "subtract-21-from-18": z.string(),
  "other-taxes": z.string(),
  "total-taxes": z.string(),

  // Refund
  "amount-overpaid": z.string(),
  "line-34-refund-amount": z.string(),
  "8888-attached": z.boolean(),
  "routing-number": z.string(),
  checking: z.boolean(),
  "savings-account": z.boolean(),
  "savings-number": z.string(),
  "2025-applied-taxes": z.string(),

  // Additional/Other fields (add as needed)
  "add-25a-thru-25c": z.string(),
  "additional-child-tax-credit": z.string(),
  "credit-for-other-deps": z.boolean(),
  "earned-credit": z.string(),
  "other-forms-tax-witheld": z.string(),
  "op-credit": z.string(),
  "schedule-3-amount": z.string(),
  "tax-payments-and-2023-return": z.string(),
  "tax-witheld": z.string(),
  "total-other-payments-and-refund-credits": z.string(),
  "total-payments": z.string(),
  "amount-owed": z.string(),
  "tax-penalty": z.string(),
});
