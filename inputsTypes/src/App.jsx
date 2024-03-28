import { useForm } from "./Hooks/useForm"

function App() {
  const [inputsForm, handleInputChange, formReset]= useForm({
    button:"",
    checkbox:"",
    color:"",
    date:"",
    datetime:"",
    email:"",
    file:"",
    image:"",
    month:"",
    number:"",
    password:"",
    radio:"",
    range:"",
    reset:"",
    search:"",
    submit:"",
    tel:"",
    text:"",
    time:"",
    url:"",
    week:"",
    })
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("button:", inputsForm.button)
    console.log("checkbox:", inputsForm.checkbox)
    console.log("color:", inputsForm.color)
    console.log("date:", inputsForm.date)
    console.log("datetime:", inputsForm.datetime)
    console.log("email:", inputsForm.email)
    console.log("file:", inputsForm.file)
    console.log("image:", inputsForm.image)
    console.log("month:", inputsForm.month)
    console.log("number:", inputsForm.number)
    console.log("password:", inputsForm.password)
    console.log("radio:", inputsForm.radio)
    console.log("range:", inputsForm.range)
    console.log("reset:", inputsForm.reset)
    console.log("search:", inputsForm.search)
    console.log("submit:", inputsForm.submit)
    console.log("tel:", inputsForm.tel)
    console.log("text:", inputsForm.text)
    console.log("time:", inputsForm.time)
    console.log("url:", inputsForm.url)
    console.log("week:", inputsForm.week)
    formReset()
    }
  

return(
  <div>
    <h1>Inputs</h1>
    <hr />
    <form onSubmit={(e) => handleSubmit(e)}>


      <div>
        <label htmlFor="button">button</label>
        <input 
        id="button" 
        type="button" 
        name="button"
        value={inputsForm.button}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="checkbox">checkbox</label>
        <input 
        id="checkbox" 
        type="checkbox" 
        name="checkbox"
        value={inputsForm.checkbox}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="color">color</label>
        <input 
        id="color" 
        type="color" 
        name="color"
        value={inputsForm.color}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="date">date</label>
        <input 
        id="date" 
        type="date" 
        name="date"
        value={inputsForm.date}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="datetime">datetime</label>
        <input 
        id="datetime" 
        type="datetime" 
        name="datetime"
        value={inputsForm.datetime}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input 
        id="email" 
        type="email" 
        name="email"
        value={inputsForm.email}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="file">file</label>
        <input 
        id="file" 
        type="file" 
        name="file"
        value={inputsForm.file}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="image">image</label>
        <input 
        id="image" 
        type="image" 
        name="image"
        value={inputsForm.image}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="month">month</label>
        <input 
        id="month" 
        type="month" 
        name="month"
        value={inputsForm.month}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="number">number</label>
        <input 
        id="number" 
        type="number" 
        name="number"
        value={inputsForm.number}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input 
        id="password" 
        type="password" 
        name="password"
        value={inputsForm.password}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="radio">radio</label>
        <input 
        id="radio" 
        type="radio" 
        name="radio"
        value={inputsForm.radio}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="range">range</label>
        <input 
        id="range" 
        type="range" 
        name="range"
        value={inputsForm.range}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="reset">reset</label>
        <input 
        id="reset" 
        type="reset" 
        name="reset"
        value={inputsForm.reset}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="search">search</label>
        <input 
        id="search" 
        type="search" 
        name="search"
        value={inputsForm.search}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="submit">submit</label>
        <input 
        id="submit" 
        type="submit" 
        name="submit"
        value={inputsForm.submit}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="tel">tel</label>
        <input 
        id="tel" 
        type="tel" 
        name="tel"
        value={inputsForm.tel}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="text">text</label>
        <input 
        id="text" 
        type="text" 
        name="text"
        value={inputsForm.text}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="time">time</label>
        <input 
        id="time" 
        type="time" 
        name="time"
        value={inputsForm.time}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="url">url</label>
        <input 
        id="url" 
        type="url" 
        name="url"
        value={inputsForm.url}
        onChange={(event) => handleInputChange(event)}
        />
      </div>

      <div>
        <label htmlFor="week">week</label>
        <input 
        id="week" 
        type="week" 
        name="week"
        value={inputsForm.week}
        onChange={(event) => handleInputChange(event)}
        />
      </div>


      <button type="submit">Submit</button>
    </form>
  </div>
)

}

export default App
