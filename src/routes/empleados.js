const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Empleadito = new Schema({
    nombre: String
});

router.get('/', async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
})

router.post('/', async (req, res) => {
    console.log(req.body);
    let coleccion = req.body.usuario
    const Empleado = mongoose.model(coleccion + '--empleados', Empleadito);
    const empleado = new Empleado(req.body);

    await empleado.save();
    res.json({
        status: 'empleados Saved'
    });
})

router.put('/:id', async (req, res) => {
    await Empleado.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'empleado Updated'
    });

})
router.delete('/deleteall', async (req, res) => {

    await Empleado.deleteMany({}, function (err) { });
    res.json({
        status: 'all deleted'
    });
})

router.delete('/:id', async (req, res) => {
    await Empleado.findByIdAndRemove(req.params.id, req.body);
    res.json({
        status: 'empleado Deleted'
    });
})


module.exports = router;