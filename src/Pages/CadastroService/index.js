import { createServices } from '../../services/Controllers/servicesController';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';


export default function CadastroService() {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  const { user } = useContext(AuthContext)
  const categorias = [
    {id: 1, tipo:"Encanador"},
    {id: 2, tipo:"Pedreiro"},
    {id: 3, tipo:"Serviços Gerais"},
    {id: 4, tipo:"Ajudante de Pedreiro"},
    {id: 5, tipo:"Pintor"},
    {id: 6, tipo:"Eletricista"},
    {id: 7, tipo:"Aux. Doméstica"},
    {id: 8, tipo:"Jardineiro"},
    {id: 9, tipo:"Carpinteiro"},
    {id: 10, tipo:"Mestre de Obras"},
    {id: 11, tipo:"Caseiro"},
    {id: 12, tipo:"Frete"}
  ]

  function cadastrarServico(){    
    createServices(user.id);
    history.push(`/services/${user.id}`);
  }

  return (
    <>      
      <div style={{margin:30}}>        
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Descrição do novo serviço</h3>
                <p className="mt-1 text-sm text-gray-600">Descreva o serviço e como ele será feito, relatando os detalhes </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Serviço
                        </label>
                        <input
                          value={title}
                          onChange={setTitle}
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Valor R$
                        </label>
                        <input
                          value={value}
                          
                          type="number"
                          name="value"
                          id="value"
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Descrição do serviço
                        </label>
                        <input
                          value={about}
                          
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Categoria
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >                          
                          {categorias.map((categoria) => (
                              <option key={categoria.id} value={categoria.id}> {categoria.tipo}</option>  
                            )) 
                          }                          
                        </select>
                      </div>                    
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      onClick={(e) => (cadastrarServico(e))}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>  
      </div>    
    </>
  )
}