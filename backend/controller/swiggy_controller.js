module.exports = {
    getCoupons: async (req, res) => {
      try {
        const swiggy_coupons = [
          {code: "SWIGGY50OFF", description: "Flat 50% off on Swiggy orders."},
          {code: "SWIGGYWOW75", description: "Wow Wednesday! Use code WOW75 for 75% off."},
          {code: "SWIGGYFREEMEAL", description: "Free meal on orders above Rs. 300."},
          {code: "SWIGGY25CASH", description: "Get Rs. 25 cashback on paying through Swiggy wallet."},
          {code: "SWIGGYNEWUSER", description: "New users enjoy Rs. 100 off on their first order."},
        ];
        console.log('Received request for Swiggy coupons');
        res.json({ success: true, coupons: swiggy_coupons });
      } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: "Internal Server Error" });
      }
    },
  };
  