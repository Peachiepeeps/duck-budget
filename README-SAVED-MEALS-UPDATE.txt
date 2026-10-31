DUCK BUDGET — SAVED MEALS & OTHER SHOPPING UPDATE

WHAT'S NEW
- A + Meal button in Shopping opens a new meal builder.
- Name a meal, optionally check "Save for later", select Sunday–Saturday or "Save only", and tap + Ingredient as often as needed.
- Add a cost to each ingredient; blank cost means $0.00.
- "Saved meals" shows reusable recipes. Choose "Add to a day" to create a fresh weekly copy, or edit/delete a saved recipe.
- The new "Other" shopping view holds household/pet items, such as cat food and cleaning supplies.
- The grocery List view contains ingredients from all assigned meals PLUS Other items, each with its own checkbox.
- Weekly planned total includes both meal ingredients and Other shopping.
- Shopping costs are estimates and do not automatically deduct from your bank balance.

DATA / COMPATIBILITY
- Previous weekly meals, budgets and checked groceries are retained.
- Reusable templates live in savedMeals and persist across weeks and in JSON backups.
- Each assignment copies a recipe's ingredients; checking or editing the planned copy won't alter the reusable saved recipe.
- Editing a saved recipe does not retroactively change earlier assignments.
- Deleting a saved recipe does not delete meals that were already assigned to days.
- Original Home, Bills, DailyPay, Goals and Classic Planner are kept.

DEPLOYING TO GITHUB PAGES
1. Export a backup from Settings in the currently running app.
2. EXTRACT the ZIP on your computer; do not upload the ZIP itself as a website file.
3. Open the extracted files and upload the CONTENTS directly to the ROOT of your duck-budget GitHub repository.
   index.html must be at the root, next to images/, service-worker.js and manifest.json.
4. Commit the changes and allow GitHub Pages to deploy.
5. Refresh the webpage or close/reopen the installed app. The offline cache was versioned for this update.

No bank account is connected; your saved data remains in the browser unless you export it yourself.
