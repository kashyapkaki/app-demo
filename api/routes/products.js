const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Get product request called",
  });
});

router.get("/:productID", (req, res, next) => {
  const id = req.params.productID;
  if (id == "123") {
    res.status(200).json({
      message: "Get request of " + id + " successful",
    });
  } else {
    res.status(200).json({
      message: "You passed invalid id",
    });
  }
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Post product request called",
  });
});

module.exports = router;
