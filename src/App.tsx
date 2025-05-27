import "./App.css";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type FormSchema, formSchema } from "./formSchema";

function App() {
  const { handleSubmit, register } = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    formSchema.parse(data);
  };

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      Form 1040 Department of the Treasury -- Internal Revenue Service U.S.
      Individual Income Tax Return 2024 OMB No. 1545-0074
      <fieldset>
        <div>
          <label htmlFor="not-important">
            For the year Jan. 1 - Dec. 31, 2024, or other tax year beginning
          </label>
          <input
            type="text"
            id="not-important"
            {...register("not-important")}
          />
        </div>
        <div>
          <label htmlFor="the-rest-of-not-important">2024, ending </label>
          <input
            type="text"
            id="the-rest-of-not-important"
            {...register("the-rest-of-not-important")}
          />
        </div>
        <span>, 20__ </span>
        <div>
          <label htmlFor="first-name-and-middle-initial">
            Your first name and middle initial
          </label>
          <input
            type="text"
            id="first-name-and-middle-initial"
            {...register("first-name-and-middle-initial")}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name </label>
          <input type="text" id="last-name" {...register("last-name")} />
        </div>
        <div>
          <label htmlFor="ssn">Your social security number </label>
          <input
            type="text"
            id="ssn"
            {...register("ssn")}
            pattern="\d\d\d-\d\d-\d\d\d\d"
          />
        </div>
        <div>
          <label htmlFor="spouse-first-name-and-middle-initial">
            if joint return, spouse's first name and middle initial
          </label>
          <input
            type="text"
            id="spouse-first-name-and-middle-initial"
            {...register("spouse-first-name-and-middle-initial")}
          />
        </div>
        <div>
          <label htmlFor="spouse-last-name">Last name</label>
          <input
            type="text"
            id="spouse-last-name"
            {...register("spouse-last-name")}
          />
        </div>
        <div>
          <label htmlFor="spouse-ssn">Spouse's social security number </label>
          <input type="text" id="spouse-ssn" {...register("spouse-ssn")} />
        </div>
        <div>
          <label htmlFor="home-address">
            Home address (number and street). If you have a P.O. box, see
            instructions
          </label>
          <input type="text" id="home-address" {...register("home-address")} />
        </div>
        <div>
          <label htmlFor="apt-num">Apt. no. </label>
          <input type="text" id="apt-num" {...register("apt-num")} />
        </div>
        <div>
          <label htmlFor="city">
            City, town, or post office. If you have a foreign address also
            complete spaces below.
          </label>
          <input type="text" id="city" {...register("city")} />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" id="state" {...register("state")} />
        </div>
        <div>
          <label htmlFor="zip-code">ZIP code</label>
          <input type="text" id="zip-code" {...register("zip-code")} />
        </div>
        <div>
          <label htmlFor="foreign-country-name">Foreign country name </label>
          <input
            type="text"
            id="foreign-country-name"
            {...register("foreign-country-name")}
          />
        </div>
        <div>
          <label htmlFor="forein-country">Foreign province/state/country</label>
          <input
            type="text"
            id="foreign-country"
            {...register("foreign-country")}
          />
        </div>
        <div>
          <label htmlFor="foreign-postal-code">Foreign postal code </label>
          <input
            type="text"
            id="foreign-postal-code"
            {...register("foreign-postal-code")}
          />
        </div>
      </fieldset>
      <fieldset>
        <header>
          Presidential Election Campaign : Check here if you, or your spouse is
          filing jointly, want $3 to go to this fund. Checking a box below will
          not change your tax or refund
        </header>
        <div>
          <input
            type="checkbox"
            id="i-fund-presidential-campaign"
            {...register("i-fund-presidential-campaign")}
          />
          <label htmlFor="i-fund-presidential-campaign">You</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="spouse-fund-presidential-campaign"
            {...register("spouse-fund-presidential-campaign")}
          />
          <label htmlFor="spouse-fund-presidential-campaign">Spouse</label>
        </div>
      </fieldset>
      <fieldset>
        <header>Filing Status : check only one box</header>
        <div>
          <input
            type="checkbox"
            id="single-filing-status"
            {...register("single-filing-status")}
          />
          <label htmlFor="single-filing-status">Single </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="head-filing-status"
            {...register("head-filing-status")}
          />
          <label htmlFor="head-filing-status">Head of household (HOH) </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="joint-filing-status"
            {...register("joint-filing-status")}
          />
          <label htmlFor="joint-filing-status">
            Married filing jointly (even if only one had income)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="separately-filing-status"
            {...register("separately-filing-status")}
          />
          <label htmlFor="separately-filing-status">
            Married filing separately (MFS)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="qss-filing-status"
            {...register("qss-filing-status")}
          />
          <label htmlFor="qss-filing-status">
            Qualifying surviving spouse (QSS)
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="dependent-filing-status"
            {...register("dependent-filing-status")}
          />
          <label htmlFor="dependent-filing-status">
            If you checked the MFS box, enter the name of your spouse.
          </label>
        </div>
        <div>
          <label htmlFor="dependent-name"></label>If you checked the HOH or QSS
          box, enter the child's name if the qualifying person is a child but
          not your dependent:
          <input
            type="text"
            id="dependent-name"
            {...register("dependent-name")}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="alien-filing-status"
            {...register("alien-filing-status")}
          />
          <label htmlFor="alien-filing-status">
            If treating a nonresident alien or dual-status alien spouse as a
            U.S. resident for the entire tax year, check the box
          </label>
        </div>
        <div>
          <label htmlFor="alien-dependent-name">
            and enter their name (see instructions and attach statement if
            required):
          </label>
          <input
            type="text"
            id="alien-dependent-name"
            {...register("alien-dependent-name")}
          />
        </div>
      </fieldset>
      <fieldset>
        <header>
          Digital Assets : At any time during 2024, did you: (a) receive (as a
          reward, award, or payment for property or services); or (b) sell,
          exchange, or otherwise dispose of a digital asset (or a financial
          interest in a digital asset)? (See instructions.)
        </header>
        <div>
          <input
            type="checkbox"
            id="yes-digital-assets"
            {...register("yes-digital-assets")}
          />
          <label htmlFor="yes-digital-assets">Yes </label>
          <input
            type="checkbox"
            id="no-digital-assets"
            {...register("no-digital-assets")}
          />
          <label htmlFor="no-digital-assets">No </label>
        </div>
      </fieldset>
      <fieldset>
        <header>Standard Deduction : Someone can claim:</header>
        <div>
          <input
            type="checkbox"
            id="someone-claims-me-as-dependent"
            {...register("someone-claims-me-as-dependent")}
          />
          <label htmlFor="someone-claims-me-as-dependent">
            You as a dependent
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="someone-claims-spouse-as-dependent"
            {...register("someone-claims-spouse-as-dependent")}
          />
          <label htmlFor="someone-claims-spouse-as-dependent">
            Your spouse as a dependent
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="alien-or-spouse-itemizes-separately"
            {...register("alien-or-spouse-itemizes-separately")}
          />
          <label htmlFor="alien-or-spouse-itemizes-separately">
            Spouse itemizes on a separate return or you were a dual-status alien
          </label>
        </div>
      </fieldset>
      <fieldset>
        <header>Age/Blindness :</header>
        <div>
          <input type="checkbox" id="old-af" {...register("old-af")} />
          <label htmlFor="old-af">You were born before January 2, 1960</label>
        </div>
        <div>
          <input type="checkbox" id="blind-af" {...register("blind-af")} />
          <label htmlFor="blind-af">You are blind</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="spouse-old-af"
            {...register("spouse-old-af")}
          />
          <label htmlFor="spouse-old-af">
            Your spouse was born before January 2, 1960
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="spouse-blind-af"
            {...register("spouse-blind-af")}
          />
          <label htmlFor="spouse-blind-af">Your spouse is blind</label>
        </div>
      </fieldset>
      <fieldset>
        <header>Dependents (repeat 4x)</header>
        <div>
          <label htmlFor="dependents-section-first-name"></label>First name
          <input
            type="text"
            id="dependents-section-first-name"
            {...register("dependents-section-first-name")}
          />
        </div>
        <div>
          <label htmlFor="dependents-section-last-name"></label>Last name
          <input
            type="text"
            id="dependents-section-last-name"
            {...register("dependents-section-last-name")}
          />
        </div>
        <div>
          <label htmlFor="dependents-section-ssn">Social security number</label>
          <input
            type="text"
            id="dependents-section-ssn"
            {...register("dependents-section-ssn")}
          />
        </div>
        <div>
          <label htmlFor="dependents-section-relationship">
            Relationship to you
          </label>
          <input
            type="text"
            id="dependents-section-relationship"
            {...register("dependents-section-relationship")}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="child-tax-credit"
            {...register("child-tax-credit")}
          />
          <label htmlFor="child-tax-credit">Child tax credit</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="credit-for-other-deps"
            {...register("credit-for-other-deps")}
          />
          <label htmlFor="credit-for-other-deps">
            Credit for other dependents
          </label>
        </div>
      </fieldset>
      <fieldset>
        <header>Income</header>
        <div>
          <label htmlFor="income-total-amount">
            1a Total amount from Form(s) W-2, box 1 (see instructions)
          </label>
          <input
            type="number"
            id="income-total-amount"
            {...register("income-total-amount")}
          />
        </div>
        <div>
          <label htmlFor="employee-wages">
            b Household employee wages not reported on Form(s) W-2
          </label>
          <input
            type="number"
            id="employee-wages"
            {...register("employee-wages")}
          />
        </div>
        <div>
          <label htmlFor="tip-income">
            c Tip income not reported on line 1a (see instructions)
          </label>
          <input type="number" id="tip-income" {...register("tip-income")} />
        </div>
        <div>
          <label htmlFor="medicaid-waiver-payments">
            d Medicaid waiver payments not reported on Form(s) W-2 (see
            instructions)
          </label>
          <input
            type="number"
            id="medicaid-waiver-payments"
            {...register("medicaid-waiver-payments")}
          />
        </div>
        <div>
          <label htmlFor="taxable-dependent-benefits">
            e Taxable dependent care benefits from ⚠️ Form 2441, line 26
          </label>
          <input
            type="number"
            id="taxable-dependent-benefits"
            {...register("taxable-dependent-benefits")}
          />
        </div>
        <div>
          <label htmlFor="employer-adoption-benefits">
            f Employer-provided adoption benefits from ⚠️ Form 8839, line 29
          </label>
          <input
            type="number"
            id="employer-adoption-benefits"
            {...register("employer-adoption-benefits")}
          />
        </div>
        <div>
          <label htmlFor="wages-from-form">
            g Wages from ⚠️ Form 8919, line 6
          </label>
          <input
            type="number"
            id="wages-from-form"
            {...register("wages-from-form")}
          />
        </div>
        <div>
          <label htmlFor="other-income">
            h Other earned income (see instructions)
          </label>
          <input
            type="number"
            id="other-income"
            {...register("other-income")}
          />
        </div>
        <div>
          <label htmlFor="combat-payments">
            i Nontaxable combat pay election (see instructions)
          </label>
          <input
            type="number"
            id="combat-payments"
            {...register("combat-payments")}
          />
        </div>
        <div>
          <label htmlFor="add-lines">z Add lines 1a through 1h </label>
          <input type="number" id="add-lines" {...register("add-lines")} />
        </div>
        <div>
          <label htmlFor="exempt-interest">2a Tax-exempt interest </label>
          <input
            type="number"
            id="exempt-interest"
            {...register("exempt-interest")}
          />
        </div>
        <div>
          <label htmlFor="taxable-interest">b Taxable interest </label>
          <input
            type="number"
            id="taxable-interest"
            {...register("taxable-interest")}
          />
        </div>
        <div>
          <label htmlFor="qualified-dividends">3a Qualified dividends </label>
          <input
            type="number"
            id="qualified-dividends"
            {...register("qualified-dividends")}
          />
        </div>
        <div>
          <label htmlFor="ordinary-dividends">b Ordinary dividends </label>
          <input
            type="number"
            id="ordinary-dividends"
            {...register("ordinary-dividends")}
          />
        </div>
        <div>
          <label htmlFor="ira-dist">4a IRA distributions </label>
          <input type="number" id="ira-dist" {...register("ira-dist")} />
        </div>
        <div>
          <label htmlFor="taxable-amount-1">b Taxable amount </label>
          <input
            type="number"
            id="taxable-amount-1"
            {...register("taxable-amount-1")}
          />
        </div>
        <div>
          <label htmlFor="pensions-annuities">5a Pensions and annuities </label>
          <input
            type="number"
            id="pensions-annuities"
            {...register("pensions-annuities")}
          />
        </div>
        <div>
          <label htmlFor="taxable-amount-2">b Taxable amount </label>
          <input
            type="number"
            id="taxable-amount-2"
            {...register("taxable-amount-2")}
          />
        </div>
        <div>
          <label htmlFor="ss-benefits">6a Social security benefits </label>
          <input type="number" id="ss-benefits" {...register("ss-benefits")} />
        </div>
        <div>
          <label htmlFor="taxable-amount-3">b Taxable amount</label>
          <input
            type="number"
            id="taxable-amount-3"
            {...register("taxable-amount-3")}
          />
        </div>
        <div>
          <label htmlFor="lump-sum-election">
            c If you elect to use the lump-sum election method, check here
          </label>
          <input
            type="checkbox"
            id="lump-sum-election"
            {...register("lump-sum-election")}
          />
        </div>
        <div>
          <label htmlFor="capital-gain-loss-req">
            7 Capital gain or (loss). Attach Schedule D if required.
          </label>
          <input
            type="number"
            id="capital-gain-loss-req"
            {...register("capital-gain-loss-req")}
          />
        </div>
        <div>
          <label htmlFor="capital-gain-loss-non-req">
            b If not required check here
          </label>
          <input
            type="checkbox"
            id="capital-gain-loss-non-req"
            {...register("capital-gain-loss-non-req")}
          />
        </div>
        <div>
          <label htmlFor="additional-income">
            8 Additional income from ⚠️ Schedule 1, line 10
          </label>
          <input
            type="number"
            id="additional-income"
            {...register("additional-income")}
          />
        </div>
        <div>
          <label htmlFor="total-income">
            9 Add lines 1z, 2b, 3b, 4b, 5b, 6b, 7 and 8. This is your **total
            income**
          </label>
          <input
            type="number"
            id="total-income"
            {...register("total-income")}
          />
        </div>
        <div>
          <label htmlFor="adjustments">
            10 Adjustments from ⚠️ Schedule 1, line 26
          </label>
          <input type="number" id="adjustments" {...register("adjustments")} />
        </div>
        <div>
          <label htmlFor="adjusted-gross">
            11 Subtract line 10 from line 9. This is your **adjusted gross
            income**
          </label>
          <input
            type="number"
            id="adjusted-gross"
            {...register("adjusted-gross")}
          />
        </div>
        <div>
          <label htmlFor="standard-deduction">
            12 Standard deduction or itemized deductions (from ⚠️ Schedule A)
          </label>
          <input
            type="number"
            id="standard-deduction"
            {...register("standard-deduction")}
          />
        </div>
        <div>
          <label htmlFor="business-income">
            13 Qualified business income deduction from ⚠️ Form 8995 or ⚠️ Form
            8995-A
          </label>
          <input
            type="number"
            id="business-income"
            {...register("business-income")}
          />
        </div>
        <div>
          <label htmlFor="add-12-and-13">14 Add lines 12 and 13 </label>
          <input
            type="number"
            id="add-12-and-13"
            {...register("add-12-and-13")}
          />
        </div>
        <div>
          <label htmlFor="taxable-income"></label>15 Subtract line 14 from line
          11. If zero or less, enter "-0-". This is your **taxable income**
          <input
            type="number"
            id="taxable-income"
            {...register("taxable-income")}
          />
        </div>
        <div>
          <label htmlFor="tax">
            16 **Tax** (see instructions). Check if any from Form(s):
          </label>
          <input type="checkbox" id="8814" {...register("8814")} />
          <label htmlFor="8814">8814</label>
          <input type="checkbox" id="4972" {...register("4972")} />
          <label htmlFor="4972"> 4972</label>
          <input
            type="checkbox"
            id="manual-form-number-checkbox"
            {...register("manual-form-number-checkbox")}
          />
          <input
            type="text"
            id="manual-form-number-input"
            {...register("manual-form-number-input")}
          />
        </div>
        <div>
          <label htmlFor="amount-from-schedule-2">
            17 Amount from ⚠️ Schedule 2, line 3
          </label>
          <input
            type="number"
            id="amount-from-schedule-2"
            {...register("amount-from-schedule-2")}
          />
        </div>
        <div>
          <label htmlFor="add-16-and-18"></label>18 Add lines 16 and 17
          <input
            type="number"
            id="add-16-and-18"
            {...register("add-16-and-18")}
          />
        </div>
        <div>
          <label htmlFor="child-tax-credit">
            19 Child tax credit or credit for other dependents from ⚠️ Schedule
            8812
          </label>
          <input
            type="number"
            id="child-tax-credit"
            {...register("child-tax-credit")}
          />
        </div>
        <div>
          <label htmlFor="amount-from-schedule-3">
            20 Amount from Schedule 3, line 8
          </label>
          <input
            type="number"
            id="amount-from-schedule-3"
            {...register("amount-from-schedule-3")}
          />
        </div>
        <div>
          <label htmlFor="add-19-and-20">21 Add lines 19 and 20 </label>
          <input
            type="number"
            id="add-19-and-20"
            {...register("add-19-and-20")}
          />
        </div>
        <div>
          <label htmlFor="subtract-21-from-18">
            22 Subtract line 21 from line 18. If zero or less, enter "-0-"
          </label>
          <input
            type="number"
            id="subtract-21-from-18"
            {...register("subtract-21-from-18")}
          />
        </div>
        <div>
          <label htmlFor="other-taxes">
            23 Other taxes, including self-employment tax, from ⚠️ Schedule 2,
            line 21
          </label>
          <input type="number" id="other-taxes" {...register("other-taxes")} />
        </div>
        <div>
          <label htmlFor="total-taxes">
            24 Add lines 22 and 23. This is your **total tax**
          </label>
          <input type="number" id="total-taxes" {...register("total-taxes")} />
        </div>
      </fieldset>
      <fieldset>
        <header>Payments </header>
        <div>
          <label htmlFor="tax-witheld">
            25 Federal income tax withheld from: a Form(s) W-2
          </label>
          <input type="number" id="tax-witheld" {...register("tax-witheld")} />
        </div>
        <div>
          <label htmlFor="1099-tax-witheld">b Form(s) 1099 </label>
          <input
            type="number"
            id="1099-tax-witheld"
            {...register("1099-tax-witheld")}
          />
        </div>
        <div>
          <label htmlFor="other-forms-tax-witheld">
            c Other forms (see instructions)
          </label>
          <input
            type="number"
            id="other-forms-tax-witheld"
            {...register("other-forms-tax-witheld")}
          />
        </div>
        <div>
          <label htmlFor="add-25a-thru-25c">d Add lines 25a through 25c </label>
          <input
            type="number"
            id="add-25a-thru-25c"
            {...register("add-25a-thru-25c")}
          />
        </div>
        <div>
          <label htmlFor="tax-payments-and-2023-return">
            26 2024 estimated tax payments and amount applied from 2023 return
          </label>
          <input
            type="number"
            id="tax-payments-and-2023-return"
            {...register("tax-payments-and-2023-return")}
          />
        </div>
        <div>
          <label htmlFor="">27 Earned income credit (EIC) </label>
          <input
            type="number"
            id="earned-credit"
            {...register("earned-credit")}
          />
        </div>
        <div>
          <label htmlFor="additional-child-tax-credit">
            28 Additional child tax credit from ⚠️ Schedule 8812
          </label>
          <input
            type="number"
            id="additional-child-tax-credit"
            {...register("additional-child-tax-credit")}
          />
        </div>
        <div>
          <label htmlFor="op-credit">
            29 American opportunity credit from Form 8863, line 8
          </label>
          <input type="number" id="op-credit" {...register("op-credit")} />
        </div>
        <div>
          <label htmlFor="schedule-3-amount">
            30 Reserved for future use --- 31 Amount from ⚠️ Schedule 3, line 15
          </label>
          <input
            type="number"
            id="schedule-3-amount"
            {...register("schedule-3-amount")}
          />
        </div>
        <div>
          <label htmlFor="total-other-payments-and-refund-credits">
            32 Add lines 27, 28, 29, 31. These are your **total other payments
            and refundable credits**
          </label>
          <input
            type="number"
            id="total-other-payments-and-refund-credits"
            {...register("total-other-payments-and-refund-credits")}
          />
        </div>
        <div>
          <label htmlFor="total-payments">
            33 Add lines 25d, 26, and 32. These are your **total payments**
          </label>
          <input
            type="number"
            id="total-payments"
            {...register("total-payments")}
          />
        </div>
      </fieldset>
      <fieldset>
        <header>Refund</header>
        <div>
          <label htmlFor="amount-overpaid">
            34 If line 33 is more than line 24, subtract line 22 from line 33.
            This is the amount you **overpaid**
          </label>
          <input
            type="number"
            id="amount-overpaid"
            {...register("amount-overpaid")}
          />
        </div>
        <div>
          <label htmlFor="line-34-refund-amount">
            35a Amount of line 34 you want refunded to you.
          </label>
          <input
            type="number"
            id="line-34-refund-amount"
            {...register("line-34-refund-amount")}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="8888-attached"
            {...register("8888-attached")}
          />
          <label htmlFor="8888-attached">
            If ⚠️ Form 8888 is attached check here
          </label>
        </div>
        <div>
          <label htmlFor="routing-number">b Routing number</label>
          <input
            type="text"
            id="routing-number"
            {...register("routing-number")}
          />
        </div>
        <div>
          <span>c Type:</span>
          <input type="checkbox" id="checking" {...register("checking")} />
          <label htmlFor="checking">Checking</label>
          <input
            type="checkbox"
            id="savings-account"
            {...register("savings-account")}
          />
          <label htmlFor="savings-account">Savings</label>
        </div>
        <div>
          <label htmlFor="savings-number"> d Account number </label>
          <input
            type="text"
            id="savings-number"
            {...register("savings-number")}
          />
        </div>
        <div>
          <label htmlFor="2025-applied-taxes">
            36 Amount of line 34 you want **applied to your 2025 estimated tax**
          </label>
          <input
            type="number"
            id="2025-applied-taxes"
            {...register("2025-applied-taxes")}
          />
        </div>
      </fieldset>
      <fieldset>
        <header>Amount You Owe</header>
        <div>
          <label htmlFor="amount-owed">
            37 Subtract line 33 from line 24. This is the **amount you owe**.
          </label>
          <input type="number" id="amount-owed" {...register("amount-owed")} />
        </div>
        <div>
          <label htmlFor="tax-penalty">
            38 Estimated tax penalty (see instructions)
          </label>
          <input type="number" id="tax-penalty" {...register("tax-penalty")} />
        </div>
      </fieldset>
      <input type="submit" value="submit" />
    </form>
  );
}

export default App;
