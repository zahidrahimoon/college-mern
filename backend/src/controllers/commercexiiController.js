// controllers/commercexiiController.js

import commercexiiModel from '../models/commercexiiModel.js';

const getCommerceXiiTimetable = async (req, res) => {
  try {
    const data = await commercexiiModel.getCommerceXiiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the commercexii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateCommerceXiiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await commercexiiModel.updateCommerceXiiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the commercexii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getCommerceXiiTimetable, updateCommerceXiiTimetable };
