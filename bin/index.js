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
  .description("CLI to add Polaris UI components")
  .version("1.0.0");

program
  .command("add <component>")
  .description("Add a PolarisUI component to your project")
  .action((component) => {
    const componentsDir = path.join(process.cwd(), "app/components");

    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }

    const templatePath = path.join(__dirname, "../templates", `${component}.tsx`);
    const destPath = path.join(componentsDir, `${component}.tsx`);

    if (!fs.existsSync(templatePath)) {
      console.log(chalk.red(`❌ Component "${component}" not found.`));
      process.exit(1);
    }

    fs.copyFileSync(templatePath, destPath);
    console.log(chalk.green(`✅ ${component}.tsx has been added to app/components`));
  });

program.parse(process.argv);
