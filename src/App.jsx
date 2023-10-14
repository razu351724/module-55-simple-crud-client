import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email)
  }

  return (
    <>

      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Type your name' />
        <br />
        <input type="email" name="email" placeholder='Type your email'/>
        <br />
        <input type="submit" value="Add User" />
      </form>

    </>
  )
}

export default App
