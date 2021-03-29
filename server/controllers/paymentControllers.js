const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const payWithStripe = (req, res) => {
  const body = {
    amount: req.body.amount,
    source: req.body.token.id,
    currency: "usd",
  };
  stripe.charge.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ succes: stripeRes });
    }
  });
};

exports.payWithStripe = payWithStripe;
