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
