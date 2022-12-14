// @desc	Register a new user
// @route   /api/users
// @access	Public
const registerUser = (req, res) => {
	const { name, email, password } = req.body;

	// Validation
	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Please include all fields');
		// return res.status(400).json({ message: 'Please include all fields' });
	}

	res.send('register route');
};

// @desc	Login a user
// @route	/api/users/login
// @access Public
const loginUser = (req, res) => {
	res.send('login route');
};

module.exports = {
	registerUser,
	loginUser,
};
