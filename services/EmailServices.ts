import { MailOptions } from "nodemailer/lib/json-transport";
import transporter from "../configuration/Config";

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
        html: `<div>
      <h1>KINSEF - ORDER DETAILS</h1>
       <h3>Cost: ${info.currency}${info.amount.toFixed(2)}</h3>
       <h3>Number Of Items: ${info.qnty}</h3>
       <p>
       Thank you for shopping with us, hoping to seeing you again:)

       </p>
       <small>visit your dashboard for more order details!</small>
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
