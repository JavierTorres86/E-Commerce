const TarjetaPresentacion = ({nombre,description,img}) => {

return(
    <div>
        <img src={img} width="100px" height="100px" alt= "nombre"/>
        <h3>{nombre}</h3>
        <p> {description}</p>
    </div>
)
}

export default TarjetaPresentacion;
