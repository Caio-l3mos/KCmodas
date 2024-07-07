import logo from '../assets/logo.jpg';

export const Headersite = () => {
    return (<>
        <div className="flex justify-evenly items-center  ">
            <a href="#" className="logo">
                <img src={logo} width="80px" />
            </a>





            <div className="flex  ">
                <input type="text"  width="510px" id="txtBusca" placeholder="Buscar..." />
                <button><img src="https://img.icons8.com/ios-filled/50/000/search--v1.png" width="30px" height="30px" id="btnBusca" alt="Buscar" /></button>
            </div>


        </div>
        <nav className="text-xl  align-items-center justify-center flex gap-60  m-auto bg-cyan-500 p-1"  >
            <a className="no-underline " href="#">Inicio</a>
            <a href="#about">Sobre</a>
            <a href="#address">Endereço</a>

        </nav>
    </>


    )
}