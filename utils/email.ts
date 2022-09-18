// Email HTML body
export function html({ email, message }: { email: string; message: string }) {
  const backgroundColor = '#f9f9f9';
  const textColor = '#282f36';
  const mainBackgroundColor = '#ffffff';

  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor}; ">
        <strong>You got an email from ${email}</strong>
      </td>
    </tr>
    <tr>
      <td style="font-family: Helvetica, Arial, sans-serif; color: ${textColor}; font-size: 16px;">
        ${message}
      </td>
    </tr>
  </table>
</body>
`;
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
export function text({ email, message }: { email: string; message: string }) {
  return `${message} | Sent from: ${email}`;
}
