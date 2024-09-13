import medxiModel from '../models/medxiModel.js';

const getMedXiTimetable = async (req, res) => {
  try {
    const data = await medxiModel.getMedXiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the medxi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateMedXiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await medxiModel.updateMedXiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the medxi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getMedXiTimetable , updateMedXiTimetable };
