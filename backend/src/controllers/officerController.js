import {
    addOfficer,
    fetchOfficers,
    updateOfficerById,
    deleteOfficerById
  } from '../models/officerModel.js';
  
  export const createOfficer = async (req, res) => {
    try {
      const { designation, bps, sanctioned, working, vacancy, remarks, type } = req.body;
      const id = await addOfficer({ designation, bps, sanctioned, working, vacancy, remarks, type });
      res.status(201).send({ id, designation, bps, sanctioned, working, vacancy, remarks, type });
    } catch (err) {
      console.error('Error creating officer:', err);
      res.status(500).send('Error creating officer');
    }
  };
  
  export const getOfficers = async (req, res) => {
    try {
      const { type } = req.params; // 'senior' or 'junior'
      const results = await fetchOfficers(type);
      res.json(results);
    } catch (err) {
      console.error('Error fetching officers:', err);
      res.status(500).send('Error fetching officers');
    }
  };
  
  export const updateOfficer = async (req, res) => {
    try {
      const { id } = req.params;
      const { designation, bps, sanctioned, working, vacancy, remarks } = req.body;
      await updateOfficerById(id, { designation, bps, sanctioned, working, vacancy, remarks });
      res.send({ id, designation, bps, sanctioned, working, vacancy, remarks });
    } catch (err) {
      console.error('Error updating officer:', err);
      res.status(500).send('Error updating officer');
    }
  };
  
  export const deleteOfficer = async (req, res) => {
    try {
      const { id } = req.params;
      await deleteOfficerById(id);
      res.send({ message: 'Officer deleted successfully' });
    } catch (err) {
      console.error('Error deleting officer:', err);
      res.status(500).send('Error deleting officer');
    }
  };
  