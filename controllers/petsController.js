const Pet = require('../models/Pet');

exports.getPets = async (req, res) => {
    const Pets = await Pet.find();
  res.json(Pets)
};


exports.addPet = async (req, res) => {
  
    const Pets = await Pet.create(req.body);
   res.json(Pets)}

exports.viewPet = async(req, res) => {
    const Pets = await Pet.findById(req.params.id);
    res.json(Pets)
};

exports.updatePet = async(req, res) => {
    const Pets = await Pet.findByIdAndUpdate(req.params.id, req.body);
    res.json(Pets)
};

exports.deletePet = async(req, res) => {
    await Pet.findByIdAndDelete(req.params.id, req.body);
    res.json("Deleted succefully")
};