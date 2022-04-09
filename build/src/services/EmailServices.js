"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountApprovalEmail = exports.OrderPlacementEmailMessage = exports.SendMail = exports.PrepareMessage = exports.PrepareEmail = void 0;
const Config_1 = __importDefault(require("../configuration/Config"));
const nodemailer_juice_1 = __importDefault(require("nodemailer-juice"));
function PrepareEmail({ sender, receiver, subject, message }) {
    const mailData = {
        from: sender,
        to: receiver,
        subject,
        text: message,
    };
    return mailData;
}
exports.PrepareEmail = PrepareEmail;
function PrepareMessage({ name, otp }) {
    let msg = `Hi,${name},your one time authentication code is  ${otp}`;
    return msg;
}
exports.PrepareMessage = PrepareMessage;
function SendMail(mailData) {
    return new Promise(function (resolve, reject) {
        try {
            Config_1.default.sendMail(mailData, (error, res) => {
                if (error) {
                    reject(error);
                }
                resolve(res);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.SendMail = SendMail;
function OrderPlacementEmailMessage(info) {
    return new Promise(function (resolve, reject) {
        try {
            const mailData = {
                from: "KINSEF.com",
                to: info.to,
                subject: "Kinsef Product Order Info",
                html: HtmlTemplate(info),
                text: "Order Placed Successfully",
            };
            Config_1.default.use("compile", (0, nodemailer_juice_1.default)());
            Config_1.default.sendMail(mailData, (error, res) => {
                error && reject(error);
                resolve(res);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.OrderPlacementEmailMessage = OrderPlacementEmailMessage;
function AccountApprovalEmail(info) {
    return new Promise(function (resolve, reject) {
        try {
            const mailData = {
                from: "KINSEF.com",
                to: info.to,
                subject: "Kinsef Seller Account",
                html: `<div>
        <h1>Registration Status</h1>
        <h3>Your Account Registration As A Kinsef Seller Has Been Approved Successfully</h3>
        <h5>Login Into Your Account To Start Uploading Your Products</h5>
        <p>than you:)</p>
        </div>`,
                text: "Order Placed Successfully",
            };
            Config_1.default.sendMail(mailData, (error, res) => {
                error && reject(error);
                resolve(res);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.AccountApprovalEmail = AccountApprovalEmail;
function HtmlTemplate(info) {
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
