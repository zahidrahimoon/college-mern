import genscixiiModel from '../models/genscixiiModel.js';

const getGenSciXiiTimetable = async (req, res) => {
  try {
    const data = await genscixiiModel.getGenSciXiiData();
    res.json(data);
  } catch (error) {
    console.error('Error querying the genscixii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateGenSciXiiTimetable = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await genscixiiModel.updateGenSciXiiData(id, data);
    res.status(200).json({ message: 'Timetable updated successfully' });
  } catch (error) {
    console.error('Error updating the GenSciXii table:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default { getGenSciXiiTimetable ,updateGenSciXiiTimetable };
