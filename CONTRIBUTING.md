# Contributing  

⚠️ **Note:**  
Currently there is no way to run a dev server directly inside this repo.  

To test and work with components, you’ll need to create a new [Shopify Remix project](https://shopify.dev/docs/apps/build/build?framework=remix), develop and run your code there, and then copy the final code back into this repository.  

I’m already working on a solution to enable local development inside this repo in the future.  

---

Before submitting a pull request, please make sure your contribution follows the Shopify UI requirements:  

- Uses the latest stable versions of **Polaris** (currently v12) and **Polaris Icons** (currently v8)  
- Stays consistent with the Polaris design language (layout, tone, patterns). Please read through the Polaris design docs first: [Polaris Docs](https://polaris-react.shopify.com/design)  
- Built primarily with Polaris components, using minimal custom HTML/CSS where Polaris falls short (inline styles are fine)  
- Keep external packages to a minimum – dependencies should be clearly justified  

## Getting Started  

1. Fork the repo and clone it locally  
2. Run `npm install` to install dependencies  

## Adding a New Component  

When adding a new component:  

- Place it inside the `/templates/components` folder, following the same structure as the other components  
- Add yourself to the `CONTRIBUTORS.md` file, following the provided example

## Adding a New Block  

When adding a new block (complex UI patterns that combine multiple components or a full page):  

- Place it inside the `/templates/blocks` folder  
- If your block uses other PolarisUI components, create a `.deps.json` file alongside your block  
- The `.deps.json` file should list all PolarisUI components used in the block, for example:  
  ```json
  {
    "components": [
      "herocard",
      "settingsblobs",
      "feedbackcard"
    ]
  }
  ```
- This helps users understand dependencies and ensures all required components are installed when using the block  

## Pull Requests  

- Use clear and descriptive branch names (e.g. `feature/settings-blob` or `fix/email-icon`).  
- Provide a short summary of your changes in the PR description. Include screenshots if it affects the UI.  
- Make sure your code follows the formatting style of the repo (Prettier/ESLint if configured).  
- By submitting a PR, you agree that your contribution will be licensed under the MIT License of this project.  

## Issues  

Found a bug or have an idea?  
Please open an issue with a clear description and, if applicable, reproduction steps. Or reach out to me on X: [Noahbuiltsapps](https://x.com/noahbuiltsapps). 