import medxiiModel from '../models/medxiiModel.js';

const getMedXiiTimetable = async (req, res) => {
  try {
    const data = await medxiiModel.getMedXiiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the medxii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateMedXiiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await medxiiModel.updateMedXiiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the medxii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export default { getMedXiiTimetable , updateMedXiiTimetable };
