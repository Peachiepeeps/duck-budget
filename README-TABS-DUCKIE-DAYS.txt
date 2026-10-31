DUCK BUDGET — TABBED CATCH-UP + DUCKIE DAYS ART

Update based on Duck_Budget_CatchUp_Simplified.zip.

CATCH-UP MODE (default)
Home / Bills / DailyPay / Shop / Goals are persistent bottom tabs.
Home is a short money snapshot; DailyPay has its own screen; Shopping now has Meal plan and Grocery list sub-tabs.
Pages scroll within their own pane if content requires it, rather than one continuous home page.
Artwork from original user Duckie Days assets (Quackers, Bubble, Shin, Lain, Tamao, Strawbunny, Pudding Snatcher).

CLASSIC MODE
Still available via Settings. Shows Home / Activity / Bills / Shop / Planner / Goals. Original plans and transactions are preserved.

SAVING + SAFETY
This update uses the same duckBudget_v1 localStorage key; it does not reset data. Your original plan/bills/goals/transactions and shopping weeks remain.
DailyPay estimates are NOT added to the bank balance; update actual money manually. Shopping is an estimate, and does not subtract from money on hand.

DEPLOYMENT
1. Before updating, use Settings > Export backup in the OLD app and save the .json file.
2. Extract this zip. Upload the CONTENTS of duck-budget-main/ to the root of the existing GitHub Pages repo, replacing matching files. Do not nest a new folder.
3. Reload installed PWA after deployment; if old views persist, hard reload once.
4. Import backup only if needed (import replaces the current stored data).

ART SOURCES
Original Duckie Days files previously supplied by the user; copied unmodified from Archive(20261029-022902).zip and duckie-days-v24-356-content.zip.

ADDITIONAL FIXES
- New bill schedules now show the first unpaid occurrence on/after bill creation instead of older already-past calendar occurrences.
- Replaced invalid service-worker.js content with a functioning offline app shell cache; the app should still be reloaded after deployment to pick up the new worker.
- Each tab is an independent internally scrolling panel if the screen is small. The app itself doesn't have one endless page.


Icon refresh (Oct 31):
- Home uses Standard-duck.
- Bills uses Duck Bucks / coin art.
- DailyPay uses Fancy-duck as a neutral pay icon.
- Shopping uses Burger-duck instead of Strawbunny.
- Goals uses the crown sticker.
