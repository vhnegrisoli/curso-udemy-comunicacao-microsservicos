import OrderService from "../service/OrderService.js";

class OrderController {
  async createOrder(req, res) {
    let order = await OrderService.createOrder(req);
    return res.status(order.status).json(order);
  }

  async findById(req, res) {
    let order = await OrderService.findById(req);
    return res.status(order.status).json(order);
  }

  async findAll(req, res) {
    let order = await OrderService.findAll(req);
    return res.status(order.status).json(order);
  }

  async findByProductId(req, res) {
    let order = await OrderService.findbyProductId(req);
    return res.status(order.status).json(order);
  }
}
export default new OrderController();
