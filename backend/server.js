const express = require("express");
const cors = require("cors");
const app = express();
const router = express.Router();
const swiggyController = require("./controller/swiggy_controller");
const zomatoController = require("./controller/zomato_controller");
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api", router);

// Backend Server
router.get("/swiggy", (req, res) => {
  console.log("Request to /swiggy received");
  swiggyController.getCoupons(req, res);
});
router.get("/zomato", (req, res) => {
    console.log("Request to /swiggy received");
    zomatoController.getCoupons(req, res);
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
