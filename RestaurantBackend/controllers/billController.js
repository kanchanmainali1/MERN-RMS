import Order from '../models/Order.js';
import Bill from '../models/Bill.js';


export const generateBill = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate('items.menuItemId');

    if (!order) return res.status(404).json({ message: 'Order not found' });

    const billItems = order.items.map(item => ({
      name: item.menuItemId.name,
      quantity: item.quantity,
      price: item.menuItemId.price,
      total: item.menuItemId.price * item.quantity
    }));

    const grandTotal = billItems.reduce((sum, item) => sum + item.total, 0);

    const bill = new Bill({
      orderId: order._id,
      billItems,
      grandTotal,
      paymentStatus: 'Unpaid'
    });

    await bill.save();
    res.status(201).json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBill = async (req, res) => {
  try {
    const bill = await Bill.findOne({ orderId: req.params.orderId });
    if (!bill) return res.status(404).json({ message: 'Bill not found' });
    res.json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePaymentStatus = async (req, res) => {
  try {
    const bill = await Bill.findOne({ orderId: req.params.orderId });
    if (!bill) return res.status(404).json({ message: 'Bill not found' });

    bill.paymentStatus = req.body.status;
    await bill.save();
    res.json(bill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// export const getAllBills = async (req, res) => {
//   try {
//     const bills = await Bill.find().populate('orderId');
//     res.json(bills);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const deleteBill = async (req, res) => {
//   try {
//     const bill = await Bill.findOneAndDelete({ orderId: req.params.orderId });
//     if (!bill) return res.status(404).json({ message: 'Bill not found' });
//     res.json({ message: 'Bill deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };



// This code defines the controller functions for managing bills in a restaurant application.
// It includes functions to generate a bill for an order, retrieve a bill by order ID,  
// update the payment status of a bill, retrieve all bills, and delete a bill.
// The `generateBill` function creates a new bill based on the items in an order,

// calculating the total for each item and the grand total for the bill.
// The `getBill` function retrieves a bill by its associated order ID.
// The `updatePaymentStatus` function updates the payment status of a bill.
// The `getAllBills` function retrieves all bills in the system, populating the order
// details for each bill.
// The `deleteBill` function deletes a bill by its associated order ID.
// Each function handles the request and response objects, performing the necessary database operations
// and returning appropriate status codes and messages.
