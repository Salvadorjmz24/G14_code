import { useState } from 'react'
import logo from '../logo.svg'

const SimpleFrom = () => {
/* Paso 1: Crea los estados donde guarde la información tecleada */
    const [email, setemail] = useState('')
    const [password, sedpassword] = useState('')

/*Paso 4: Manejo lo que sucedera cuando envie mi formulario */
    const handleSubmit = (event) => {
        event.preventDefault() //Hacemos que no se reacargue la página
        // Convertimos mi data en un objeto JSON
        const submittedData = JSON.stringify({email, password })
        console.log(submittedData)
    }

/* Paso 2: Crear mi formulario base */
    return (
        <div className='login'>
            <div className='login-container'>
                <img src={logo} alt='logo' className='logo' width='200px' height='200px' />
                <form className='form'>
                    <label htmlFor='email'>Email</label>
                    {/* Paso 3. Guardo cada cambio del input en su estado correspondiente */}
                    <input
                        type='text'
                        name='email'
                        placeholder='correo@mail.com'
                        onChange={(event)=> setEmail(event.target.value)}
                    />

                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='******'
                        onChange={(event)=> setPassword(event.target.value)}
                    />

                    <button onClick={handleSubmit}>
                        Iniciar Sesión
                    </button>

                </form>
            </div>
        </div>
    )
}

export default SimpleFrom