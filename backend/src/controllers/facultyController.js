import { addFaculty, fetchFaculty, updateFacultyById, deleteFacultyById } from '../models/facultyModel.js';

export const createFaculty = async (req, res) => {
  try {
    const { name, title, qualification, department_id } = req.body;
    const image = req.file ? req.file.filename : null;
    const id = await addFaculty({ name, title, qualification, image, department_id });
    res.status(201).send({ id, name, title, qualification, image, department_id });
  } catch (err) {
    console.error('Error creating faculty:', err);
    res.status(500).send('Error creating faculty');
  }
};

export const getFaculty = async (req, res) => {
  try {
      const results = await fetchFaculty();
      const data = results.reduce((acc, row) => {
          const { department, image, ...faculty } = row;

          // Construct the full path to the image
          const imagePath = image ? `/uploads/${image}` : null;
          console.log(imagePath);
          // If department does not exist in the accumulator, initialize it
          if (!acc[department]) {
              acc[department] = { department, members: [] };
          }

          // Include the image path in the faculty object
          acc[department].members.push({ ...faculty, image: imagePath });

          return acc;
      }, {});

      res.json(Object.values(data));
  } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Error fetching data');
  }
};


export const updateFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, title, qualification, department_id } = req.body;
    const image = req.file ? req.file.filename : null;
    await updateFacultyById(id, { name, title, qualification, image, department_id });
    res.send({ id, name, title, qualification, image, department_id });
  } catch (err) {
    console.error('Error updating faculty:', err);
    res.status(500).send('Error updating faculty');
  }
};

export const deleteFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteFacultyById(id);
    res.send({ message: 'Faculty member deleted successfully' });
  } catch (err) {
    console.error('Error deleting faculty:', err);
    res.status(500).send('Error deleting faculty');
  }
};
