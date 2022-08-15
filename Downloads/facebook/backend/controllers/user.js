const User = require("../models/User");
exports.register = async (req, res) => {
   try { 
    const {
        first_name,
        last_name,
        birth_year,
        birth_month,
        birth_day,
        gender,
        username,
        email,
        password
        } = req.body;
    // could use syntax conser user = await new User ({req.body})in place of specifics
    const user = await new User({ 
        first_name,
        last_name,
        birth_year,
        birth_month,
        birth_day,
        gender,
        username,
        email,
        password,
    }).save();
    res.json(user); 
    } catch (error) {
     res.status(500).json({ message: error.message});
    }
};