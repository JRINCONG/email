const catchError = require('../utils/catchError');
const {sendEmail} = require('../utils/sendEmail')

const getAll = catchError(async(req, res) => {
    const {Nombre, Apellido, Email, Empresa, Mensage, Telefono}= req.body

    await sendEmail({
		to: process.env.EMAIL, // Email del receptor
		subject: "Enviado desde mi CV", // asunto
		html: ` 
				<div>
						<p>Hola Mi nombre es ${Nombre} ${Apellido}, trabajo en la empresa ${Empresa}</p><br/>
                        <p> este es mi correo ${Email} y mi numero de telefono es ${Telefono}  te dejo esta informacion: ${Mensage}</p>
				</div>
		` // con backtics ``
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

