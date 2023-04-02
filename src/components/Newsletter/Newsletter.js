import './Newsletter.css'

function Newsletter() {
  return (
    <section className='form-container'>
      <h2>Sign up for an account!</h2>
      <form className='form-elements'>
        <label>Email:
          <input type="text" />
        </label>
        <label>Username:
          <input type="text" />
        </label>
        <label>Password:
          <input type="text" />
        </label>
        <label>
          <input
            type="checkbox"
          />
          Newsletter
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </section>
  )
}



export default Newsletter
