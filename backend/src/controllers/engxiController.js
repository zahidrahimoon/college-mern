import engxiModel from '../models/engxiModel.js';

const getEngXiTimetable = async (req, res) => {
  try {
    const data = await engxiModel.getEngXiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the engxi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateEngXiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await engxiModel.updateengXiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the engxi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getEngXiTimetable , updateEngXiTimetable };
