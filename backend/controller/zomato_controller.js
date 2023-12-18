module.exports = {
    getCoupons: async (req, res) => {
      try {
        const zomato_coupons = [
            {"code": "ZOMA10OFF", "description": "Get 10% off on your Zomato order."},
            {"code": "ZOMANEWUSER", "description": "New users enjoy a discount of Rs. 50 on their first order."},
            {"code": "ZOMAFREEDEL", "description": "Free delivery on orders above Rs. 200."},
            {"code": "ZOMA15CASH", "description": "Get Rs. 15 cashback on paying through Zomato wallet."},
            {"code": "ZOMA20NEW", "description": "New users get 20% off on their first three orders."},
        ];
        console.log('Received request for Swiggy coupons');
        res.json({ success: true, coupons: zomato_coupons });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      }
    },
  };
  