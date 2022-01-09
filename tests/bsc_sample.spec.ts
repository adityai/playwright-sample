import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.blueshieldca.com/fad/
  await page.goto('https://www.blueshieldca.com/fad/');

  // Click button:has-text("Doctors & Specialists")
  await page.click('button:has-text("Doctors & Specialists")');

  // Click text=Continue as a guest
  await page.click('text=Continue as a guest');
  await expect(page).toHaveURL('https://www.blueshieldca.com/fad/location');

  // Fill [placeholder="1231 Main St, Hollywood, CA 90210, USA"]
  await page.type('[placeholder="1231 Main St, Hollywood, CA 90210, USA"]', 'San Francisco CA, USA', {delay: 100});
  await page.press('[placeholder="1231 Main St, Hollywood, CA 90210, USA"]', 'Space');  
  await page.press('[placeholder="1231 Main St, Hollywood, CA 90210, USA"]', "ArrowDown");
  await page.press('[placeholder="1231 Main St, Hollywood, CA 90210, USA"]', "Enter");

  // Click text=Continue
  await page.click('text=Continue');
  await expect(page).toHaveURL('https://www.blueshieldca.com/fad/plans/chooseplan');

  // Click text=Select a plan This link open new url
  await page.click('text=Select a plan This link open new url');
  await expect(page).toHaveURL('https://www.blueshieldca.com/fad/plans/planselect');

  // Click text=2022
  await page.focus('#planYearDropdown');
  await page.click('#planYearDropdown');

  // Click text=2023
  await page.click('text=2023');

  // Click text=Select plan type
  await page.click('text=Select plan type');

  // Press Enter
  await page.press('text=Blue Shield of California PPO Network', 'Enter');

  // Click text=Continue with this plan
  await page.click('text=Continue with this plan');
  await expect(page).toHaveURL('https://www.blueshieldca.com/fad/search');

});
