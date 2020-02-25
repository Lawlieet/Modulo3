const Place = require("../models/Place")
//Todas las direcciones
exports.getAllPlaces = async (req, res) => {
    const places = await Place.find()
    // en vez de hacer render o enviar datos arbitrariamente, enviamos un json al frontend.
    res.status(200).json({ places })
}
//Una direccion
exports.getPlace = async (req, res) => {
    const { id } = req.params;
    const place = await Place.findById(id)
    // en vez de hacer render o enviar datos arbitrariamente, enviamos un json al frontend.
    res.status(200).json(place)
}
//Crear un un lugar - Place - Direccion
exports.createPlace = async (req, res) => {
    const { title , description , latitude, longitude } = req.body
    await Place.create( { title , description , latitude, longitude })
    res.status(201).json({message: 'Place created'})
}
//Actualizar un lugar - Place - Direccion
exports.updatePlace = async (req, res) => {
    const { id } = req.params;
    const { title , description , latitude, longitude } = req.body;
    await Place.findByIdAndUpdate(id, { title , description , latitude, longitude})
    res.status(200).json({message: "Place Update"})
}
//Eliminar un lugar - Place - Direccion
exports.deletePlace = async ( req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    res.status(200).json({message:" Place Delete"})
}
