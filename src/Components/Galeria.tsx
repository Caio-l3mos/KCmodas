
export const Galeria = () => {
    return (

        <div className="containergaleria  max-w-50px h-screen  bg-red-900">

            <div className=" w-52 mt-10  text-white">
                <img className="card-img-top" src="https://down-br.img.susercontent.com/file/sg-11134201-7rbkz-lntbs13ppp9a3a" alt="Imagem de capa do card" />
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Link do card</a>
                    <a href="#" className="card-link">Outro link</a>
                </div>
            </div>

        </div>
    )
}