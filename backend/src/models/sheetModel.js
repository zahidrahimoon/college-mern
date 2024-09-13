import { sheets } from '../config/googleconfig.js';

const getSheetData = async (spreadsheetId, range) => {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range
    });
    return response.data.values;
  } catch (error) {
    throw new Error('Failed to fetch data from Google Sheets');
  }
};

export { getSheetData };
