import { Request, Response } from "express";
import moment from "moment";
import { GenerateOTP } from "../../functions/Functions";
import { IDebitPaymentInfo } from "../../interface/IDebitsPaymentInfo";
import { AddDebitPayment, GetDebitsPayments } from "../../services/Services";

export default async function (request: Request, response: Response) {
  try {
    const info: IDebitPaymentInfo = request.body;
    info.date_paid = moment().format();
    info.reference = GenerateOTP();
    const Info = await AddDebitPayment(info);
    response.send({
      message: "Payment Successfull",
      data: await GetDebitsPayments(),
    });
  } catch (error) {
    console.log(error);
    response.status(404).send("Server Network Error");
  }
}
