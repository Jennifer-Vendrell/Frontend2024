import ListItem from "./ListItem.jsx"


const agenda =[
  {
    list: '1',
    name: 'Jennifer Vendrell Javier',
    correo: 'Vendrell.JenniferM20@gmail.com',
    phone: '2871443354'
  },
  {
    list: '2',
    name: 'Jareth Vendrell Javier',
    correo: 'Jareth.Vendrell718@gmail.com',
    phone: '2871110294'
  },
  {
    list: '3',
    name: 'Alejandro Sanchez Navarrete',
    correo: 'Alejandro.Sanchez104@gmail.com',
    phone: '2871229867'
  }
]

function App() {
  
  return (
    <>
    <div>
        <h1>
          Agenda
        </h1>
        <hr />
        <ul>
          
          {agenda.map((agenda) =>
          <ListItem 
          key={agenda.correo}
          list={agenda.list}
          name={agenda.name}
          correo={agenda.correo}
          phone={agenda.phone}
          />
          )}

        </ul>
      </div>     
    </>
  )
}

export default App
