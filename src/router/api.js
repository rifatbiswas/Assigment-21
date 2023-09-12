const { TotalRevenue, QuantityByProduct, TopProducts, AveragePrice, RevenueByMonth, CreateProduct } = require("../controller/SalesController");
const router = require("express").Router();

router.get("/api/sales/total-revenue", TotalRevenue)
router.get("/api/sales/quantity-by-product", QuantityByProduct)
router.get("/api/sales/top-products", TopProducts)
router.get("/api/sales/average-price", AveragePrice)
router.get("/api/sales/revenue-by-month", RevenueByMonth)

module.exports = router;
