// controllers/mailController.js
import { sendEmail } from '../utils/sendEmail.js';

export const sendMailController = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: 'idreesnawab78@gmail.com',
      subject: 'GDBC ASIFABAD',
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: 'Message Sent Successfully.',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};
