#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

program
  .name("polarisui")
  .description("CLI to add Polaris UI components or blocks")
  .version("1.2.0");

program
  .command("add <name>")
  .description("Add a PolarisUI component or block to your project")
  .action((name) => {
    const cwd = process.cwd();
    const componentsDir = path.join(cwd, "app/components");
    const routesDir = path.join(cwd, "app/routes");

    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }
    if (!fs.existsSync(routesDir)) {
      fs.mkdirSync(routesDir, { recursive: true });
    }

    // --- Check for component ---
    const componentTemplatePath = path.join(__dirname, "../templates/components", `${name}.tsx`);
    if (fs.existsSync(componentTemplatePath)) {
      const destPath = path.join(componentsDir, `${name}.tsx`);
      fs.copyFileSync(componentTemplatePath, destPath);
      console.log(chalk.green(`✅ Component "${name}.tsx" has been added to app/components`));
      return;
    }

    // --- Check for block ---
    const blockTemplatePath = path.join(__dirname, "../templates/blocks", `${name}.tsx`);
    if (fs.existsSync(blockTemplatePath)) {
      const destPath = path.join(routesDir, `app.${name}.tsx`);
      fs.copyFileSync(blockTemplatePath, destPath);
      console.log(chalk.green(`✅ Block "app.${name}.tsx" has been added to app/routes`));

      // Check if block has dependencies (deps.json)
      const depsConfigPath = path.join(__dirname, "../templates/blocks", `${name}.deps.json`);
      if (fs.existsSync(depsConfigPath)) {
        const deps = JSON.parse(fs.readFileSync(depsConfigPath, "utf-8"));
        deps.components.forEach((component) => {
          const compTemplatePath = path.join(__dirname, "../templates/components", `${component}.tsx`);
          const compDestPath = path.join(componentsDir, `${component}.tsx`);

          if (fs.existsSync(compTemplatePath)) {
            fs.copyFileSync(compTemplatePath, compDestPath);
            console.log(chalk.yellow(`➡️ Imported dependency component: ${component}.tsx`));
          } else {
            console.log(chalk.red(`⚠️ Missing dependency template: ${component}.tsx`));
          }
        });
      }
      return;
    }

    console.log(chalk.red(`❌ No component or block named "${name}" found in templates.`));
    process.exit(1);
  });

program.parse(process.argv);