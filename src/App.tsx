import "./App.css";

function App() {
  return (
    <form className="App">
      Form 1040 Department of the Treasury -- Internal Revenue Service U.S.
      Individual Income Tax Return 2024 OMB No. 1545-0074{" "}
      <fieldset>
        <label htmlFor="not-important">
          For the year Jan. 1 - Dec. 31, 2024, or other tax year beginning{" "}
        </label>
        <input type="text" id="not-important" />,{" "}
        <label htmlFor="the-rest-of-not-important">2024, ending </label>
        <input type="text" id="the-rest-of-not-important" />, 20__{" "}
        <label htmlFor="first-name-and-middle-initial">
          Your first name and middle initial{" "}
        </label>
        <input type="text" id="first-name-and-middle-initial" />{" "}
        <label htmlFor="last-name">Last name </label>
        <input type="text" id="last-name" />{" "}
        <label htmlFor="ssn">Your social security number </label>
        <input type="text" id="ssn" pattern="\d\d\d-\d\d-\d\d\d\d" />{" "}
        <label htmlFor="spouse-first-name-and-middle-initial">
          if joint return, spouse's first name and middle initial{" "}
        </label>
        <input type="text" id="spouse-first-name-and-middle-initial" />
        <label htmlFor="spouse-last-name">Last name</label>{" "}
        <input type="text" id="spouse-last-name" />{" "}
        <label htmlFor="spouse-ssn">Spouse's social security number </label>
        <input type="text" id="spouse-ssn" />{" "}
        <label htmlFor="home-address">
          Home address (number and street). If you have a P.O. box, see
          instructions{" "}
        </label>
        <input type="text" id="home-address" />{" "}
        <label htmlFor="apt-num">Apt. no. </label>
        <input type="text" id="apt-num" />{" "}
        <label htmlFor="city">
          City, town, or post office. If you have a foreign address also
          complete spaces below.
        </label>{" "}
        <input type="text" id="city" /> <label htmlFor="state">State</label>{" "}
        <input type="text" id="state" />
        <label htmlFor="zip-code">ZIP code</label>{" "}
        <input type="text" id="zip-code" />{" "}
        <label htmlFor="foreign-country-name">Foreign country name </label>
        <input type="text" id="foreign-country-name" />
        <label htmlFor="forein-country">
          Foreign province/state/country
        </label>{" "}
        <input type="text" id="foreign-country" />{" "}
        <label htmlFor="foreign-postal-code">Foreign postal code </label>
        <input type="text" id="foreign-postal-code" />
      </fieldset>
      <fieldset>
        Presidential Election Campaign : Check here if you, or your spouse is
        filing jointly, want $3 to go to this fund. Checking a box below will
        not change your tax or refund
        <input type="checkbox" id="i-fund-presidential-campaign" />{" "}
        <label htmlFor="i-fund-presidential-campaign">You</label>{" "}
        <input type="checkbox" id="spouse-fund-presidential-campaign" />
        <label htmlFor="spouse-fund-presidential-campaign">Spouse</label>
      </fieldset>
      <fieldset>
        Filing Status : check only one box{" "}
        <input type="checkbox" id="single-filing-status" />{" "}
        <label htmlFor="single-filing-status">Single </label>
        <input type="checkbox" id="head-filing-status" />{" "}
        <label htmlFor="head-filing-status">Head of household (HOH) </label>
        <input type="checkbox" id="joint-filing-status" />{" "}
        <label htmlFor="joint-filing-status">
          Married filing jointly (even if only one had income)
        </label>{" "}
        <input type="checkbox" id="separately-filing-status" />
        <label htmlFor="separately-filing-status">
          Married filing separately (MFS)
        </label>{" "}
        <input type="checkbox" id="qss-filing-status" />{" "}
        <label htmlFor="qss-filing-status">
          Qualifying surviving spouse (QSS)
        </label>{" "}
        <input type="checkbox" id="dependent-filing-status" />{" "}
        <label htmlFor="dependent-filing-status">
          If you checked the MFS box, enter the name of your spouse.
        </label>{" "}
        <label htmlFor="dependent-name"></label>If you checked the HOH or QSS
        box, enter the child's name if the qualifying person is a child but not
        your dependent: <input type="text" id="dependent-name" />{" "}
        <input type="checkbox" id="alien-filing-status" />{" "}
        <label htmlFor="alien-filing-status">
          If treating a nonresident alien or dual-status alien spouse as a U.S.
          resident for the entire tax year, check the box
        </label>{" "}
        <label htmlFor="alien-dependent-name">
          and enter their name (see instructions and attach statement if
          required):
        </label>{" "}
        <input type="text" id="alien-dependent-name" />
      </fieldset>
      <fieldset>
        Digital Assets : At any time during 2024, did you: (a) receive (as a
        reward, award, or payment for property or services); or (b) sell,
        exchange, or otherwise dispose of a digital asset (or a financial
        interest in a digital asset)? (See instructions.){" "}
        <input type="checkbox" id="yes-digital-assets" />{" "}
        <label htmlFor="yes-digital-assets">Yes </label>
        <input type="checkbox" id="no-digital-assets" />
        <label htmlFor="no-digital-assets">No </label>
      </fieldset>
      <fieldset>
        Standard Deduction : Someone can claim:{" "}
        <input type="checkbox" id="someone-claims-me-as-dependent" />{" "}
        <label htmlFor="someone-claims-me-as-dependent">
          You as a dependent
        </label>{" "}
        <input type="checkbox" id="someone-claims-spouse-as-dependent" />{" "}
        <label htmlFor="someone-claims-spouse-as-dependent">
          Your spouse as a dependent
        </label>{" "}
        <input type="checkbox" id="alien-or-spouse-itemizes-separately" />{" "}
        <label htmlFor="alien-or-spouse-itemizes-separately">
          Spouse itemizes on a separate return or you were a dual-status alien{" "}
        </label>
      </fieldset>
      <fieldset>
        Age/Blindness : <input type="checkbox" id="old-af" />{" "}
        <label htmlFor="old-af">You were born before January 2, 1960</label>
        <input type="checkbox" id="blind-af" />{" "}
        <label htmlFor="blind-af"></label>You are blind{" "}
        <input type="checkbox" id="spouse-old-af" />{" "}
        <label htmlFor="spouse-old-af"></label>Your spouse was born before
        January 2, 1960 <input type="checkbox" id="spouse-blind-af" />{" "}
        <label htmlFor="spouse-blind-af"></label>Your spouse is blind{" "}
      </fieldset>
      <fieldset>
        Dependents (repeat 4x){" "}
        <label htmlFor="dependents-section-first-name"></label>First name{" "}
        <input type="text" id="dependents-section-first-name" />{" "}
        <label htmlFor="dependents-section-last-name"></label>Last name{" "}
        <input type="text" id="dependents-section-last-name" />{" "}
        <label htmlFor="dependents-section-ssn">Social security number</label>{" "}
        <input type="text" id="dependents-section-ssn" />{" "}
        <label htmlFor="dependents-section-relationship">
          Relationship to you{" "}
        </label>
        <input type="text" id="dependents-section-relationship" />{" "}
        <input type="checkbox" id="child-tax-credit" />{" "}
        <label htmlFor="child-tax-credit"></label>Child tax credit{" "}
        <input type="checkbox" id="credit-for-other-deps" />{" "}
        <label htmlFor="credit-for-other-deps">
          Credit for other dependents{" "}
        </label>
      </fieldset>
      <fieldset>
        Income 1a Total amount from Form(s) W-2, box 1 (see instructions){" "}
        <input type="number" /> b Household employee wages not reported on
        Form(s) W-2
        <input type="number" /> c Tip income not reported on line 1a (see
        instructions) <input type="number" /> d Medicaid waiver payments not
        reported on Form(s) W-2 (see instructions)
        <input type="number" /> e Taxable dependent care benefits from ⚠️ Form
        2441, line 26 <input type="number" /> f Employer-provided adoption
        benefits from ⚠️ Form 8839, line 29 <input type="number" /> g Wages from
        ⚠️ Form 8919, line 6 <input type="number" /> h Other earned income (see
        instructions) <input type="number" /> i Nontaxable combat pay election
        (see instructions)
        <input type="number" /> z Add lines 1a through 1h{" "}
        <input type="number" /> 2a Tax-exempt interest <input type="number" /> b
        Taxable interest <input type="number" /> 3a Qualified dividends{" "}
        <input type="number" /> b Ordinary dividends <input type="number" /> 4a
        IRA distributions <input type="number" /> b Taxable amount{" "}
        <input type="number" /> 5a Pensions and annuities{" "}
        <input type="number" /> b Taxable amount <input type="number" /> 6a
        Social security benefits <input type="number" /> b Taxable amount c If
        you elect to use the lump-sum election method, check here{" "}
        <input type="checkbox" /> 7 Capital gain or (loss). Attach Schedule D if
        required. <input type="number" /> b If not required check here{" "}
        <input type="checkbox" /> 8 Additional income from ⚠️ Schedule 1, line
        10 <input type="number" /> 9 Add lines 1z, 2b, 3b, 4b, 5b, 6b, 7 and 8.
        This is your **total income** <input type="number" />
        10 Adjustments from ⚠️ Schedule 1, line 26 <input type="number" /> 11
        Subtract line 10 from line 9. This is your **adjusted gross income**{" "}
        <input type="number" /> 12 Standard deduction or itemized deductions
        (from ⚠️ Schedule A) <input type="number" /> 13 Qualified business
        income deduction from ⚠️ Form 8995 or ⚠️ Form 8995-A{" "}
        <input type="number" /> 14 Add lines 12 and 13 <input type="number" />{" "}
        15 Subtract line 14 from line 11. If zero or less, enter "-0-". This is
        your **taxable income** <input type="number" /> 16 **Tax** (see
        instructions).
        <input type="number" />{" "}
      </fieldset>
      Check if any from Form(s): <input type="checkbox" /> 8814{" "}
      <input type="checkbox" /> 4972 <input type="checkbox" />{" "}
      <input type="text" />
      17 Amount from ⚠️ Schedule 2, line 3 <input type="number" /> 18 Add lines
      16 and 17 <input type="number" /> 19 Child tax credit or credit for other
      dependents from ⚠️ Schedule 8812 <input type="number" /> 20 Amount from
      Schedule 3, line 8 <input type="number" /> 21 Add lines 19 and 20{" "}
      <input type="number" /> 22 Subtract line 21 from line 18. If zero or less,
      enter "-0-" <input type="number" /> 23 Other taxes, including
      self-employment tax, from ⚠️ Schedule 2, line 21 <input type="number" />{" "}
      24 Add lines 22 and 23. This is your **total tax** <input type="number" />{" "}
      Payments 25 Federal income tax withheld from: a Form(s) W-2{" "}
      <input type="number" /> b Form(s) 1099 <input type="number" /> c Other
      forms (see instructions) <input type="number" /> d Add lines 25a through
      25c <input type="number" /> 26 2024 estimated tax payments and amount
      applied from 2023 return <input type="number" /> 27 Earned income credit
      (EIC) <input type="number" /> 28 Additional child tax credit from ⚠️
      Schedule 8812 <input type="number" /> 29 American opportunity credit from
      Form 8863, line 8 <input type="number" /> 30 Reserved for future use ---
      31 Amount from ⚠️ Schedule 3, line 15 <input type="number" /> 32 Add lines
      27, 28, 29, 31. These are your **total other payments and refundable
      credits**
      <input type="number" /> 33 Add lines 25d, 26, and 32. These are your
      **total payments** <input type="number" />
      Refund 34 If line 33 is more than line 24, subtract line 22 from line 33.
      This is the amount you **overpaid** <input type="number" /> 35a Amount of
      line 34 you want refunded to you. <input type="number" />{" "}
      <input type="checkbox" /> If ⚠️ Form 8888 is attached check here b Routing
      number <input type="text" /> c Type: <input type="checkbox" /> Checking{" "}
      <input type="checkbox" />
      Savings d Account number <input type="text" /> 36 Amount of line 34 you
      want **applied to your 2025 estimated tax** <input type="number" /> Amount
      You Owe 37 Subtract line 33 from line 24. This is the **amount you owe**.{" "}
      <input type="number" />
      38 Estimated tax penalty (see instructions) <input type="number" />
    </form>
  );
}

export default App;
