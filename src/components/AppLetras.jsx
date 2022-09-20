import useLetras from '../hooks/useLetras'
import Alerta from './Alerta'
import Letra from './Letra'
import Formulario from './Formulario'

const AppLetras = () => {
    const { alerta, letra, cargando } = useLetras()
    return (
        <>
            <header>Búsqueda de Letras de Canciones</header>
            <Formulario />
            <main>
                {alerta ? (
                    <Alerta>{alerta}</Alerta>
                ) : letra ? (
                    <Letra />
                ) : cargando ? (
                    'Cargando...'
                ) : (
                    <p className="text-center">
                        Busca letras de tus artistas favoritos
                    </p>
                )}
            </main>
        </>
    )
}

export default AppLetras
