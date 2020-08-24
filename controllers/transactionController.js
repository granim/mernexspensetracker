const Transaction = require('../models/Transaction');


// @desc Get all Transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }

}

// @desc Add a Transactions
// @route Post /api/v1/transactions
// @access Public
exports.addTransactions = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
        if (transaction) return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(v => v.message);
            return res.status(400).json({
                success: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            })
        }

    }
}

// @desc Delete a Transactions
// @route Delete/api/v1/transactions/:id
// @access Public
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }
        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: 'Server Error'
        });
    }
}