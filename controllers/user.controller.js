const {response, request } = require ('express');

const usuariosGet = (req = request, res = response) => {

    const { q , nombre , apikey } = req.query;

    res.json({
        msg: 'get API',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id;

    res.status(500).json({
        msg: 'put API',
        id
    })
}
const usuariosPost = (req = request, res = response) => {

    const {nombre,edad} = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad
    })
}
const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API'
    })
}
const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

}




