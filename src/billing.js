import Stripe from "stripe";
import handler from "./utils/handler";
import { calculateCost } from "./utils/cost";

export const main = handler(async (event) => {
  const { storage, source } = JSON.parse(event.body);

  const amount = calculateCost(storage);
  const description = "Scatch charge";

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const payment = await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
  });
  console.log("PAY: ", payment);
  return { status: true };
});
