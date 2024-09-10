const catchError = require('../utils/catchError');
const { sendEmail } = require('../utils/sendEmail')

const getAll = catchError(async(req, res) => {
    
    await sendEmail({
		to: 'rincon303@gmail.com', // Email del receptor
		subject: "Enviado desde mi CV", // asunto
		html: ` 
				<div>
						<p>Hola Mi nombre es ${req.body.Nombre} ${req.body.Apellido}, trabajo en la empresa ${req.body.Empresa}</p><br/>
                        <p> este es mi correo ${req.body.Email} y mi numero de telefono es ${req.body.Telefono}  te dejo esta informacion: ${req.body.Mensage}</p>
				</div>
		`
})

return res.status(200).json({
	Enviado:'ok',
	Status:200,
	Mensage:"Mail enviado Correctamente"
});
});

module.exports = {
    getAll
}

