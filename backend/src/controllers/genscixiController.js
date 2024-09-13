import genscixiModel from '../models/genscixiModel.js';

const getGenSciXiTimetable = async (req, res) => {
  try {
    const data = await genscixiModel.getGenSciXiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the genscixi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
const updateGenSciXiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await genscixiModel.updateGenSciXiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the GenSciXi table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
export default { getGenSciXiTimetable , updateGenSciXiTimetable };
