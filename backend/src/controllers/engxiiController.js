import engxiiModel from '../models/engxiiModel.js';

const getEngXiiTimetable = async (req, res) => {
  try {
    const data = await engxiiModel.getEngXiiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the engxii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const updateEngXiiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await engxiiModel.updateEngXiiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the engxii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getEngXiiTimetable  , updateEngXiiTimetable };
