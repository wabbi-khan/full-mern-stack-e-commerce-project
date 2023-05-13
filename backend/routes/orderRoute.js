const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

// ? create new order
router.route("/order/new").post(isAuthenticatedUser, newOrder);

// ? order search by id
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

// ? orders of login user
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// ? get all order for only admin
router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

// ? with this api we will change order status PROCESSING or DELIVERED OR DELETE
router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
