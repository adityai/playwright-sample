# Playwright Sample



## Install
Clone the repo and execute the following to install playwright

```
npm install
npx install playwright
```

## To run

### Execute headless

```npx playwright test```

### Execute headed

```npx playwright test --headed```

### Execute on specific browser

Note: playwright.config.ts as defined in the repo is required where each of the browsers need to be declared. 

```npx playwright test --project=firefox```

