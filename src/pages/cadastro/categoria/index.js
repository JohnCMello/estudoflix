import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const startValues = {
    name: '',
    description: '',
    color: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(startValues);
  
  function setValue(name, value){
    setValues({
      ...values,
      [name]: value,   
    })
  }
  
  function handleChange(eventInfo){
    setValue(
      eventInfo.target.getAttribute('name'), 
      eventInfo.target.value
    );
  }
 
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form onSubmit={function handleSubmit(eventInfo){
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(startValues)
      }}>

        <FormField
          label="Nome da Categoria"
          type='text'
          name='name' 
          values={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type='textbox'
          name='Descrição'         
          values={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor" 
          type='color'
          name='Cor' 
          values={values.color}
          onChange={handleChange}
        />


        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((category, index)=>{
          return(
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}
  

export default CadastroCategoria;