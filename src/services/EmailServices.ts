import { MailOptions } from "nodemailer/lib/json-transport";
import transporter from "../configuration/Config";
import juicyCss from "nodemailer-juice";
import singleTemplate from "bootstrap-email";

// const template = new singleTemplate("template.html");
// template.compile();

type Props = {
  sender: string;
  receiver: string;
  subject: string;
  message: string;
};
export function PrepareEmail({ sender, receiver, subject, message }: Props) {
  const mailData = {
    from: sender, // sender address
    to: receiver, // list of receivers
    subject,
    text: message,
  };
  return mailData;
}

type MsgParams = {
  name: string;
  otp: string;
};
export function PrepareMessage({ name, otp }: MsgParams) {
  let msg = `Hi,${name},your one time authentication code is  ${otp}`;
  return msg;
}

export function SendMail(mailData) {
  return new Promise(function (resolve, reject) {
    try {
      transporter.sendMail(mailData, (error, res) => {
        if (error) {
          reject(error);
        }
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function OrderPlacementEmailMessage(info: {
  to: string;
  amount: number;
  currency: string;
  qnty: number;
}) {
  return new Promise(function (resolve, reject) {
    try {
      const mailData: MailOptions = {
        from: "KINSEF.com", // sender address
        to: info.to, // list of receivers
        subject: "Kinsef Product Order Info",
        html: HtmlTemplate(info),
        text: "Order Placed Successfully",
      };
      transporter.use("compile", juicyCss());
      transporter.sendMail(mailData, (error, res) => {
        error && reject(error);
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function AccountApprovalEmail(info: { to: string }) {
  return new Promise(function (resolve, reject) {
    try {
      const mailData: MailOptions = {
        from: "KINSEF.com", // sender address
        to: info.to, // list of receivers
        subject: "Kinsef Seller Account",
        html: `<div>
        <h1>Registration Status</h1>
        <h3>Your Account Registration As A Kinsef Seller Has Been Approved Successfully</h3>
        <h5>Login Into Your Account To Start Uploading Your Products</h5>
        <p>than you:)</p>
        </div>`,
        text: "Order Placed Successfully",
      };
      transporter.sendMail(mailData, (error, res) => {
        error && reject(error);
        resolve(res);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function HtmlTemplate(info: {
  currency: string;
  qnty: number;
  amount: number;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Document Test</title>

    <style>
      html {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100vw;
      }
      body {
        padding: 20px;
        justify-content: center;
        background: steelblue;
        width: 100%;
        overflow: hidden;
        height: 100%;
      }
      .container {
        background-color: #fefefe;
        max-width: 400px;
        overflow: hidden;
        min-width:100%;
      }
      .header {
        padding: 10px;
        width: 100%;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #d0d0d0;
      }
      .header_title {
        text-align: center;
        font-weight: bold;
        font-size: 16;
        width: 100%;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }
      .item_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding: 5px;
      }
      .item_container_label {
        text-align: left;
        width: 100%;
        font-size: 0.75rem;
        color: gray;
      }
      .item_container_value {
        width: 100%;
        text-align: left;
        color: #004565;
        font-weight: 500;
        font-size: 0.85rem;
        padding: 5px 0;
      }
      .item {
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }
      .item_header_title {
        flex: 1;
        text-align: center;
        text-transform: uppercase;
        font-weight: 500;
        font-family: bahnschrift;
        font-size: 0.75rem;
      }
      .items_table {
        width: 100%;
        margin-top: 10px;
        box-shadow: 2px 2px 2px #f3f3f3;
        border-radius: 0px;
        padding: 8px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start
      }
      .item_data {
        padding: 10px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      .item_data_value {
        flex: 1;
        text-align: center;
        font-weight: 200;
        font-family: bahnschrift;
        font-size: 0.75rem;
      }
      .footer {
        width: 100%;
        margin-top: 20px;
        align-self: center;
        justify-self: center;
      }
      .cost_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .cost_label {
        flex: 1;
        text-align: left;
        font-weight: bold;
        font-size: 0.8rem;
        width: 100%;
        padding-left: 10px;
      }
      .cost_value {
        flex: 1;
        font-weight: bold;
        text-align: right;
        width: 100%;
        font-size: 0.85rem;
        padding-right: 20px;
      }
      .info_container {
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color: #fff;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <p class="header_title">Order Details</p>
      </div>
      <div class="info_container">
        <div class="item_container">
          <p class="item_container_label">Customer Name:</p>
          <p class="item_container_value">Biliksuun Samuel</p>
        </div>
        <div class="item_container">
          <p class="item_container_label">Tracking Number:</p>
          <p class="item_container_value">0550465223</p>
        </div>
        <div class="item_container">
          <p class="item_container_label">Email Address:</p>
          <p class="item_container_value">biliksuunsamuel@gmail.com</p>
        </div>
        <div class="item_container">
          <p class="item_container_label">Shipping Address:</p>
          <p class="item_container_value">Sunyani Fiapre Ghana</p>
        </div>
      </div>
      <div class="items_table">
        <div class="item">
          <p class="item_header_title">Ref.</p>
          <p class="item_header_title">No. Items</p>
          <p class="item_header_title">Amount</p>
        </div>
        <div class="item_data">
          <p class="item_data_value">640789</p>
          <p class="item_data_value">5</p>
          <p class="item_data_value">250</p>
        </div>
      </div>
      <div class="links" style="padding: 10px; margin-top: 10px; width: 100%">
        <p class="complain_tex">
          If you have any issues or complains,send an email to:
        </p>
        <a style="text-decoration: none" href="mailto:support@kinsef.com">
          <p style="text-decoration: none; color: #dc931e">
            Support@Kinsef.com
          </p>
        </a>
      </div>
    </div>
  </body>
</html>
  `;
}
