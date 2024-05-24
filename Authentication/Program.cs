using BCryptNet = BCrypt.Net.BCrypt;
using System;
using System.Web;
using System.Web.UI;

public partial class Registro : Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack)
        {
            ProcesarRegistro();
        }
    }

    private void ProcesarRegistro()
    {
        string correo = Request.Form["correo"];
        string contraseña = Request.Form["contraseña"];

        if (ValidarCorreo(correo) && ValidarContraseña(contraseña))
        {
            string contraseñaHasheada = BCryptNet.HashPassword(contraseña);
            // Aquí deberías añadir el código para almacenar el correo y la contraseña hasheada en tu base de datos
            // Por ejemplo: GuardarUsuario(correo, contraseñaHasheada);
        }
        else
        {
            // Gestionar la respuesta de error adecuadamente
            Response.Write("<script>alert('Correo o contraseña no válidos.');</script>");
        }
    }

    private bool ValidarCorreo(string correo)
    {
        // Añade aquí tu lógica de validación de correo
        return !string.IsNullOrEmpty(correo);
    }

    private bool ValidarContraseña(string contraseña)
    {
        // Añade aquí tu lógica de validación de contraseña
        return !string.IsNullOrEmpty(contraseña);
    }
}
