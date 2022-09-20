import useLetras from "../hooks/useLetras"

const Letra = () => {
    const {letra, cargando} = useLetras()
  return (
    cargando ? 'Cargando...' :
    <div>{letra}</div>
  )
}

export default Letra