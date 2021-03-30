const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY);
const payWithStripe = (req, res) => {
  const body = {
    amount: req.body.amount,
    source: req.body.token.id,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    console.log("im here");
    if (stripeErr) {
      console.log("damn");
      console.log(stripeErr);
      res.status(500).send({ error: stripeErr });
    } else {
      consolelog("it works");
      res.status(200).send({ succes: stripeRes });
    }
  });
};

exports.payWithStripe = payWithStripe;
