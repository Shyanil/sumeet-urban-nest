"use client";

import { useState } from "react";

export default function ConfigurationBudgetFields({ fieldClassName }: { fieldClassName: string }) {
  const [configuration, setConfiguration] = useState("");
  const budgetOptions = configuration === "2-bohk"
    ? ["₹55L–₹60L", "₹60L–₹65L+"]
    : configuration === "3-bohk"
      ? ["₹85L–₹90L", "₹90L–₹95L", "₹95L–₹1Cr+"]
      : configuration === "not-sure"
        ? ["2 BOHK: ₹55L–₹60L", "2 BOHK: ₹60L–₹65L+", "3 BOHK: ₹85L–₹90L", "3 BOHK: ₹90L–₹95L", "3 BOHK: ₹95L–₹1Cr+"]
        : [];

  return (
    <>
      <div>
        <label htmlFor="home2-interest" className="mb-1.5 block text-[11px] font-semibold text-[#514c46]">Select Configuration</label>
        <select required id="home2-interest" name="interest" value={configuration} onChange={(event) => setConfiguration(event.target.value)} className={`${fieldClassName} appearance-none text-[#746b66]`}>
          <option value="" disabled>Select Configuration</option>
          <option value="2-bohk">2 BOHK</option>
          <option value="3-bohk">3 BOHK</option>
          <option value="not-sure">Not Sure</option>
        </select>
      </div>
      <div>
        <label htmlFor="home2-budget" className="mb-1.5 block text-[11px] font-semibold text-[#514c46]">Your Budget</label>
        <select required={Boolean(configuration)} disabled={!configuration} key={configuration} id="home2-budget" name="budget" defaultValue="" className={`${fieldClassName} appearance-none text-[#746b66] disabled:cursor-not-allowed disabled:opacity-55`}>
          <option value="" disabled>Your Budget</option>
          {budgetOptions.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
        </select>
      </div>
    </>
  );
}
