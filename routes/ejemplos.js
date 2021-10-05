const { Router } = require('express');
const router = Router();
var faker = require('faker');

router.get('/', (req, res) => {

    let nombre = "Pancho";
    let apellido = "";

    if(nombre == "Francisco")
        apellido = "Boisier";
    else 
        apellido = "Villa";


    res.send('<h1>BIENVENIDO  '+nombre + ' ' + apellido +' </h1>')
})

router.get('/mision', (req, res) => {
    res.json({ mision: { nombre: "VIAJE A MARTE", fecha:"10-02-2021", ciudad:{ nombre:"TEMUCO", codigo:"TMZ" } } })
})


router.get('/empresa', (req,res)=>{
    
    const empresa = {
        nombre: faker.company.companyName(),
        direccion: faker.address.streetAddress(),
        telefono: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        pagina: faker.internet.url(),
        logo: faker.image.imageUrl(),
        descripcion: faker.company.catchPhrase(),
        productos: [
            {
                nombre: faker.commerce.productName(),
                precio: faker.commerce.price(),
                descripcion: faker.commerce.productAdjective(),
                imagen: faker.image.imageUrl()
            }
        ]
    }

    res.json(empresa);
})

router.get('/parametros/:uno/:dos/:tres', (req, res) => {
    
    console.log(req.params.uno);
    console.log(req.params.dos);
    console.log(req.params.tres);


    res.json( { status: "ok" } );
});


router.post("/crearusuario", (req, res) => {
    
    console.log(req.body);


    res.json( { status: "ok", data: req.body } );
});

module.exports = router;