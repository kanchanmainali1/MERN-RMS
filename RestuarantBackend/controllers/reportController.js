import Bill from '../models/Bill.js';
import Expense from '../models/Expense.js';
import mongoose from 'mongoose';

const sumAmount = arr => arr.reduce((acc, item) => acc + item.amount || item.grandTotal || 0, 0);

export const getDailyReport = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const income = await Bill.find({ createdAt: { $gte: new Date(today) } });
    const expense = await Expense.find({ date: { $gte: new Date(today) } });

    res.json({
      date: today,
      income: sumAmount(income),
      expense: sumAmount(expense),
      profit: sumAmount(income) - sumAmount(expense)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMonthlyReport = async (req, res) => {
  try {
    const start = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const end = new Date();

    const income = await Bill.find({ createdAt: { $gte: start, $lte: end } });
    const expense = await Expense.find({ date: { $gte: start, $lte: end } });

    res.json({
      month: `${start.getFullYear()}-${start.getMonth() + 1}`,
      income: sumAmount(income),
      expense: sumAmount(expense),
      profit: sumAmount(income) - sumAmount(expense)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
