import { useRef } from "react"
import logo from '../logo.svg'

const RefLogin = () => {
    const form = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault() // Esto hace que no se recargue la página
        const formData = new FormData(form.current)
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data)
    }

    return (
        
        <div className='login'>
            <div className='login-container'>
                <img src={logo} alt='logo' className='logo' width='100px' height='100px' />
                <form className='form' ref={form} >
                    <label className="email" htmlFor='email'>Email</label>
                    <input 
                        type='text'
                        name='email'
                        placeholder='correo@mail.com'
                    />

                    <label htmlFor='password'>contraseña</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='******'
                    />


                    <button onClick={handleSubmit}>
                        Iniciar Sesión
                    </button>

                </form>
            </div>
        </div>
    )
}

export default RefLogin