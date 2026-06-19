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


    // MongoDB integration can be added here later
    const enquiryData = {
      name,
      email,
      phone,
      createdAt: new Date(),
    };


    return res.status(201).json({
      success: true,
      message: "Workshop enquiry submitted successfully",
      data: enquiryData,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
};


module.exports = {
  createEnquiry,
};