const Enquiry = require("../models/Enquiry");

const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone number are required",
      });
    }

    // Save to MongoDB
    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Workshop enquiry submitted successfully",
      data: newEnquiry,
    });

  } catch (error) {
    console.error("Error creating enquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

module.exports = {
  createEnquiry,
};