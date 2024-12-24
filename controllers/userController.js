// const users = [];

// exports.getAllUsers = (req, res) => {
//     res.json(users);
// };

// exports.getUserById = (req, res) => {
//     const user = users.find(user => user.id === parseInt(req.params.id));
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
// };

// exports.createUser = (req, res) => {
//     const newUser = {
//         id: users.length + 1,
//         ...req.body
//     };
//     users.push(newUser);
//     res.status(201).json(newUser);
// };

// exports.updateUser = (req, res) => {
//     const user = users.find(user => user.id === parseInt(req.params.id));
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     Object.assign(user, req.body);
//     res.json(user);
// };

// exports.deleteUser = (req, res) => {
//     const index = users.findIndex(user => user.id === parseInt(req.params.id));
//     if (index === -1) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     users.splice(index, 1);
//     res.status(204).json(({message: 'User deleted successfully'}));
// }






const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.update(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
