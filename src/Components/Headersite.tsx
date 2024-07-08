import logo from '../assets/logo.png';

export const Headersite = () => {
    return (<>
        <div className="flex justify-evenly items-center  ">
            <a href="#" className="logo">
                <img src={logo} width="80px" />
            </a>





            <div className="flex  ">
                <input type="text"  width="510px" id="txtBusca" placeholder="Buscar..." />
                <button><img src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png" width="30px" height="30px" id="btnBusca" alt="Buscar" /></button>
            </div>


        </div>
        <nav className=" text-white text-xl  align-items-center justify-center flex gap-60   bg-red-600 p-1 mb-0"  >
            <a  href="#">Inicio</a>
            <a href="#about">Sobre</a>
            <a href="#address">Endereço</a>

        </nav>
    </>


    )
}