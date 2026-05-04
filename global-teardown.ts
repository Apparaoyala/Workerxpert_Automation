import { exec } from 'child_process';

async function globalTeardown() {
  console.log("Test execution completed... Sending email report");

  exec("node utilitys/sendReportEmail.js", (error, stdout, stderr) => {
    if (error) {
      console.log(`Email error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    console.log(stdout);
  });
}

export default globalTeardown;