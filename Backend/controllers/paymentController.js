const Razorpay = require("razorpay");
const crypto = require("crypto");

const checkout = async (req, res) => {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

  const orderOption = {
    amount: Number(req.body.amount) * 100,
    currency: "INR",
  };

  const order = await instance.orders.create(orderOption);

  console.log(order);

  res.status(200).json({
    status: "success",
    order,
  });
};

const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    res.redirect(
      `http://localhost:5173/paymentSuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({
      status: "failed",
    });
  }
};

module.exports = { checkout, paymentVerification };
