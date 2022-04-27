import { MailOptions } from "nodemailer/lib/json-transport";
import transporter from "../configuration/Config";
import juicyCss from "nodemailer-juice";
import singleTemplate from "bootstrap-email";
import { IOrderInfo } from "../interface/IModel";
import moment from "moment";

// const template = new singleTemplate("template.html");
// template.compile();

export type MailProps = {
  sender: string;
  receiver: string;
  subject: string;
  message: string;
};
export function PrepareEmail({
  sender,
  receiver,
  subject,
  message,
}: MailProps) {
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

export function PreparePasswordResetMailMessage({ name, otp }: MsgParams) {
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

export function OrderPlacementEmailMessage(info: IOrderInfo) {
  return new Promise(function (resolve, reject) {
    try {
      const mailData: MailOptions = {
        from: "KINSEF.com", // sender address
        to: info.billing.email, // list of receivers
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
        <p>thank you:)</p>
        </div>`,
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

function HtmlTemplate(info: IOrderInfo) {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      * {
        padding: 0;
        margin: 0;
        background-color: #fff;
        font-family: arial;
        font-size: 12;
      }

      body {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }
      .container {
        padding: 0px;
        border-radius: 1px;
      }
      .container_header {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #dc931e;
      }
      .container_header h3 {
        background-color: transparent;
        color: #fff;
      }
      .info_container {
        margin: 10px 0;
      }

      .info_container h5 {
        margin: 5px 0;
        color: #dc931e;
      }

      .product_info_container {
        margin: 0;
        border: 0px solid rgba(211, 211, 211, 0.65);
        padding: 5px;
      }

      .product_table {
        margin: 10px 0;
      }
      .product_table tr th {
        font-weight: bold;
        text-align: center;
      }
      .product_table tr td {
        text-align: center;
      }
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }

      .billing_info_container {
        padding: 5px 20x;
        margin: 10px px;
      }
      .billing_info {
        padding: 10px 5px;
        border-radius: 0px;
        border: 1px solid rgba(211, 211, 211, 0.65);
        margin-top: 10px;
      }
      .billing_info p {
        margin-top: 5px;
      }
      .billing_info h4 {
        margin-top: 5px;
      }
      .billing_info a {
        margin: 5px 0;
      }
      .thank_msg {
        margin: 10px 0;
      }

      .download_app_container {
        width: auto;
      }

      .img {
        height: 150px;
        width: 100%;
        overflow: hidden;
        background-color: black;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .logo {
        height: 50px;
        align-self: flex-start;
      }
    </style>
  </head>
  <body>
    <div class="container">
     <div class="logo">
        <img
          src="https://www.kinsef.com/storage/2021/05/1-e1620128165670-1-e1622102906188.png"
        />
      </div>
      <div class="container_header">
        <h3>Thank you for your order</h3>
      </div>
      <div class="info_container">
        <h4>Hi ${info.billing.name},</h4>
        <p>
          Just to let you know -- we've received your order
          <strong> #${info.reference}, </strong> and it is now being processed:
        </p>
        <h5>[Order #${info.reference}] ${moment(info.date).format(
    "DD/MMMM/YYYY"
  )}</h5>
      </div>
      <div class="product_info_container">
        <table class="product_table">
          <tr>
            <th style="text-align:left">Product</th>
            <th>Quantity</th>
            <th colspan="2">Selection</th>
            <th>Price</th>
          </tr>
          ${info.content
            .map(
              (c) =>
                `<tr>
                <td style="text-align: left">
                ${c.name}
                </td>
                <td>
                ${c.qnty}
                </td>
                <td colspan="2">
                 ${
                   c.specification.length > 0
                     ? `
                      <table>
                      <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Qnty</th>
                      </tr>
                      ${c.specification
                        .map(
                          (cs) =>
                            `
                        <tr>
                        <td>${cs.title}</th>
                        <td>${cs.value}</td>
                        <td>${cs.quantity}</td>
                         </tr>
                        `
                        )
                        .join("")}
                    </table>
                   `
                     : `<h2>--</h2>`
                 }
                </td>
                <td>
                ${info.currency_symbol + c.cost}
                </td>
              </tr>`
            )
            .join("")}
          <tr>
            <td colspan="4" style="text-align: left"><strong>Subtotal:</strong></td>
            <td>
            ${info.currency_symbol + (info.amount - info.delivery_cost)}
            </td>
          </tr>
          <tr>
            <td colspan="4" style="text-align: left"><strong>Shipping:</strong></td>
            <td>
            ${info.currency_symbol + info.delivery_cost}
            <small>via flat rate</small></td>
          </tr>
          <tr>
            <td colspan="4" style="text-align: left"><strong>Payment Method:</strong></td>
            <td>Debit/Credit Cards</td>
          </tr>
          <tr>
            <td colspan="4" style="text-align: left"><strong>Total:</strong></td>
            <td>
              <strong>
              ${info.currency_symbol + info.amount}
              </strong>
            </td>
          </tr>
        </table>
      </div>
      <div class="billing_info_container">
        <h3>Billing Address</h3>
        <div class="billing_info">
          <p>
          ${info.billing.name}
          </p>
          <p>
          ${info.delivery.town_city}
          </p>
          <h4>
          ${info.billing.phone}
          </h4>
          <a
            style="margin-top: 10xp; margin-bottom: 10px"
            href="mailto:${info.billing.email}"
          >
            ${info.billing.email}
          </a>
        </div>
      </div>
      <h3 class="thank_msg">Thanks for shopping with us.</h3>
      <h3 class="thank_msg" style="margin-top:20px">Download The Kinsef Mobile App From:</h3>
      <div class="download_app_container">
        <table style="border-style: none">
          <tr style="border-style: none">
            <td style="border-style: none">
              <div class="img">
                <a style="border-style: none">
                  <img
                    src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png"
                  />
                </a>
              </div>
            </td>
            <td style="border-style: none">
              <div class="img" style="border-style: none">
                <a>
                  <img
                    style="border-style: none"
                    src="https://manners4minors.com/wp-content/uploads/2016/06/app-store-badge.png"
                  />
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
 `;
}
