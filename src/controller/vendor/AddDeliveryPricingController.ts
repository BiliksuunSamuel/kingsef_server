import {
  AddDeliveryPricing,
  GetDeliveryPricingByISOCode,
  GetDeliveryPricings,
} from "../../services/Services";

export default async function AddDeliveryPricingController(req, res) {
  try {
    const data = req.body;

    const result = await GetDeliveryPricingByISOCode({
      isoCode: data.state_city.isoCode,
    });
    if (result) {
      res.status(404).send("Delivery Pricing Exist For This State/City");
    } else {
      await AddDeliveryPricing(data);
      res.send({
        data: await GetDeliveryPricings(),
        message: "Delivery Pricing Added Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("Sever Network Error");
  }
}
