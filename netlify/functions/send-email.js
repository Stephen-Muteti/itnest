import nodemailer from "nodemailer";

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      subject,
      message,
    } = JSON.parse(event.body);

    // SMTP transporter configuration
    // Update with your email provider credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtppro.zoho.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f7fa; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #03045e; padding: 30px 40px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="display: inline-block; width: 40px; height: 40px; background-color: #00b4d8; border-radius: 8px; text-align: center; line-height: 40px; margin-right: 12px;">
                            <span style="color: #03045e; font-weight: bold; font-size: 18px;">iT</span>
                          </div>
                          <span style="color: #caf0f8; font-size: 20px; font-weight: 600; vertical-align: middle;">itnest</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Title Section -->
                <tr>
                  <td style="padding: 30px 40px 20px 40px; border-bottom: 1px solid #e8ecf0;">
                    <h1 style="margin: 0 0 8px 0; color: #03045e; font-size: 22px; font-weight: 600;">
                      New Project Inquiry
                    </h1>
                    <p style="margin: 0; color: #6b7b8f; font-size: 14px;">
                      You have received a new inquiry through the website contact form.
                    </p>
                  </td>
                </tr>

                <!-- Contact Information -->
                <tr>
                  <td style="padding: 25px 40px;">
                    <h2 style="margin: 0 0 16px 0; color: #03045e; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Contact Details
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                      <tr>
                        <td style="padding: 12px 20px; border-bottom: 1px solid #e8ecf0;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px; font-weight: 500;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 20px; border-bottom: 1px solid #e8ecf0;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                          <p style="margin: 4px 0 0 0; color: #0077b6; font-size: 15px;">
                            <a href="mailto:${email}" style="color: #0077b6; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      ${phone ? `
                      <tr>
                        <td style="padding: 12px 20px; border-bottom: 1px solid #e8ecf0;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px;">
                            <a href="tel:${phone}" style="color: #03045e; text-decoration: none;">${phone}</a>
                          </p>
                        </td>
                      </tr>
                      ` : ''}
                      ${company ? `
                      <tr>
                        <td style="padding: 12px 20px;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px; font-weight: 500;">${company}</p>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>

                <!-- Project Details -->
                <tr>
                  <td style="padding: 0 40px 25px 40px;">
                    <h2 style="margin: 0 0 16px 0; color: #03045e; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Project Information
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px;">
                      ${service ? `
                      <tr>
                        <td style="padding: 12px 20px; border-bottom: 1px solid #e8ecf0;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Service Required</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px; font-weight: 500;">${service}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${budget ? `
                      <tr>
                        <td style="padding: 12px 20px; border-bottom: 1px solid #e8ecf0;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Budget Range</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px;">${budget}</p>
                        </td>
                      </tr>
                      ` : ''}
                      ${timeline ? `
                      <tr>
                        <td style="padding: 12px 20px; border-bottom: 1px solid #e8ecf0;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Timeline</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px;">${timeline}</p>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 12px 20px;">
                          <span style="color: #6b7b8f; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Subject</span>
                          <p style="margin: 4px 0 0 0; color: #03045e; font-size: 15px; font-weight: 500;">${subject}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding: 0 40px 30px 40px;">
                    <h2 style="margin: 0 0 16px 0; color: #03045e; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      Message
                    </h2>
                    <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border-left: 4px solid #00b4d8;">
                      <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8fafc; padding: 25px 40px; border-top: 1px solid #e8ecf0;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin: 0 0 8px 0; color: #6b7b8f; font-size: 13px;">
                            This inquiry was submitted via the itnest website contact form.
                          </p>
                          <p style="margin: 0; color: #6b7b8f; font-size: 12px;">
                            © ${new Date().getFullYear()} itnest • Nairobi, Kenya
                          </p>
                        </td>
                        <td align="right">
                          <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #00b4d8; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 500;">
                            Reply to Client
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"itnest Website" <${process.env.SMTP_USER}>`,
      to: "info@itnest.org",
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: error.message }),
    };
  }
};
