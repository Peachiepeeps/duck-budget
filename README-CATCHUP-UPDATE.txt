DUCK BUDGET — SIMPLE CATCH-UP HOME + SHOPPING

WHAT CHANGED
• New default home is Catch-Up Mode. The old paycheck planner is still included.
• Existing plans, bills, goals, debts, transactions and meal-shopping weeks are preserved.
• Bottom navigation in Catch-Up Mode: Home / Bills / Goals. Shopping is opened from Home.
• ⚙ Settings → Switch to Classic Paycheck Planner restores the old Home, Planner, Transactions, Bills and Goals navigation. Switch back any time.

HOW CATCH-UP MODE WORKS
1. Enter Money on hand: actual checking/cash you want to budget, including any DailyPay transfer already received. Negative balances are accepted. This is a manual snapshot, NOT automatic bank sync.
2. Add your bills in Bills. The Home counts bills due through the next entered payday (or next 14 days if no payday is set), plus unmarked bills from the last 31 days. When adding a new bill, earlier scheduled occurrences are not treated as overdue. Home also excludes bills marked paid.
3. Adjust Food, gas & basics expected until payday. The Shopping meal planner is a separate estimate; include groceries in this basics amount if they must be funded before payday.
4. Enter next payday, typical paycheck take-home BEFORE any DailyPay, and the RUNNING TOTAL already accessed from that paycheck. Estimated payday deposit = typical take-home - early withdrawals - other amounts deducted from the deposit. This is an estimate, not an income entry. Each payday date keeps its own DailyPay total.
5. Set a small protected cushion target and an amount reserved FROM the balance in Step 1. A buffer in a separate account is not part of this Home balance and should not be subtracted again.

IMPORTANT MONEY-SAFETY NOTES
• The headline "Left after planned needs" is a planning estimate: last balance check-in minus unpaid tracked bills minus planned basics minus money protected as buffer.
• Adding a purchase or receiving a DailyPay transfer does NOT automatically change the snapshot. Update your account balance when money changes. Shopping plans also do not deduct from your balance.
• Marking a tracked bill paid from Catch-Up Mode will ask for your REAL current balance so the bill being marked paid does not make your projected spending money look larger by mistake. Do not subtract a payment twice if the current balance already reflects it.
• Do not add forecast paycheck deposits to your balance before they actually arrive. DailyPay is an advance on wages, not extra income.
• If you have bills overdue more than 31 days, review the Bills page and account statements; the Home estimate does not include all historical arrears.
• This is an offline budgeting aide, not a bank connection or financial guarantee.

TO DEPLOY ON GITHUB PAGES
1. Open your existing app FIRST and go to ⚙ Settings → Export backup. Save the JSON.
2. Extract THIS ZIP. Upload the contents of the duck-budget-main folder to the ROOT of the same GitHub repository currently serving your app, replacing matching files. Do not create an extra nested folder.
3. Refresh the hosted app. If you still see the old home screen, reload or close/reopen the installed shortcut after deployment has finished.
4. Data stays in the same browser/origin. If data is ever missing, use ⚙ Settings → Import backup with your exported JSON. Import replaces the existing data on that device.

NOTE ABOUT YOUR ORIGINAL DATA
This update keeps the same localStorage key (duckBudget_v1) and normalizes older backup formats. It doesn't erase old paycheck plans or financial entries. Switching modes only changes the view and available navigation.
