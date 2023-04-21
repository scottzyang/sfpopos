import './Newsletter.css'

function Newsletter() {
  return (
    <section className='form-container'>
      <h2>Sign up for an account!</h2>
      <form className='form-elements'>
        <label for="email">Email:
          <input type="text" id="email" aria-describedby='email-description'/>
          <span id="email-description">Enter your email</span>
        </label>
        <label for="username">Username:
          <input type="text" id="username" aria-describedby='username-description'/>
          <span id="username-description">Enter your Username</span>
        </label>
        <label for="password">Password:
          <input type="text" id="password"/>
          <span id="password-description">Enter your Password</span>
        </label>
        <label>
          <input
            type="checkbox"
          />
          <span id="username-description">Newsletter</span>
        </label>
        <label>
          <input type="submit" value="Submit" />
        </label>
      </form>
    </section>
  )
}



export default Newsletter
