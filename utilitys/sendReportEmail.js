const nodemailer = require("nodemailer");
const fs = require("fs");

async function sendEmail() {
    try {
        const report = JSON.parse(
            fs.readFileSync("test-results.json", "utf-8")
        );
         let TotalTests = []
        let passedTests = [];
        let failedTests = [];

        report.suites.forEach((suite) => {
            suite.specs.forEach((spec) => {
                spec.tests.forEach((test) => {
                    const testName = spec.title;
                    TotalTests.push(testName); 
                    // Get final execution result (important for retries)
                    const finalResult =
                        test.results[test.results.length - 1];

                    // Passed test
                    if (finalResult.status === "passed") {
                        passedTests.push(testName);
                    }

                    // Failed / Timeout / Interrupted test
                    if (
                        finalResult.status === "failed" ||
                        finalResult.status === "timedOut" ||
                        finalResult.status === "interrupted"
                    ) {
                        let errorMsg =
                            finalResult.error?.message ||
                            "No error message available";

                        failedTests.push(
                            `${testName} → ${errorMsg}`
                        );
                    }
                });
            });
        });

        // Mail configuration
        const transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            auth: {
                user: "notifier2@aquilasoftware.com",
                pass: "Aquila123"
            }
        });

        const mailOptions = {
            from: "notifier2@aquilasoftware.com",
            to: "Apparao.yala@hospiquesoftware.com",
            subject: "Playwright Automation Execution Report",

            html: `
                <h2>Execution Summary</h2>
                 <p><b>Total:</b> ${TotalTests.length}</p>
                <p><b>Total Passed:</b> ${passedTests.length}</p>
                <p><b>Total Failed:</b> ${failedTests.length}</p>

                <h3>Passed Tests</h3>
                <ul>
                    ${
                        passedTests.length > 0
                            ? passedTests
                                  .map(
                                      (test) =>
                                          `<li>✅ ${test}</li>`
                                  )
                                  .join("")
                            : "<li>No Passed Tests</li>"
                    }
                </ul>

                <h3>Failed Tests</h3>
                <ul>
                    ${
                        failedTests.length > 0
                            ? failedTests
                                  .map(
                                      (test) =>
                                          `<li>❌ ${test}</li>`
                                  )
                                  .join("")
                            : "<li>No Failed Tests</li>"
                    }
                </ul>
            `
        };

        await transporter.sendMail(mailOptions);

        console.log("✅ Mail Sent Successfully");

    } catch (error) {
        console.log("❌ Email failed:", error);
    }
}

sendEmail();