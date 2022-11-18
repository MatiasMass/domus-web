import "../Secretary.css" 
import SideBar from '../../../layout/SideBar'

const AddClients = () => {
    return(
        <div className="formulario">
            <form>
                <div className="formulario-inputs">
                    <label htmlFor="">Nombre</label>
                    <input type="text" placeholder="Nombre" />
                </div>
            </form>
        </div>
    )
}