import { getSheetData } from '../models/sheetModel.js';

const getSheetDataController = async (req, res) => {
  try {
    const data = await getSheetData('1Q8tiaBvq6Y-H_nm6zJ6fzLf0RsOczsnTG2IRMKQ_42U', 'Sheet1');
    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};

export { getSheetDataController };
