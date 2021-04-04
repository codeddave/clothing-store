const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const payWithStripe = (req, res) => {
  const body = {
    amount: req.body.amount,
    source: req.body.token.id,
    currency: "usd",
  };
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).json({ error: stripeErr });
    } else {
      res.status(200).json({ success: stripeRes });
    }
  });
  res.status(200).json({ success: "done" });
};

exports.payWithStripe = payWithStripe;
