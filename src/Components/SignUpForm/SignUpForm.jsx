import { Component} from 'react'

export default class SignUpForm extends Component{
 state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
 };

 handleChange =(evt)=>{
  this.setState({
   [evt.target.name]:evt.target.value,
   error:''
  })
 }
signupHandle = async (evt) => {
  try {
    // 1. POST our new user info to the server
    const fetchResponse = await fetch('/api/users/signup', {
      method: 'POST',
      headers: { 'Contect-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
    // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
    if (!fetchResponse.ok) throw new Error('Fetch failed -bad request')

    let token = await fetchResponse.json() //3.decode fetch response to get jwt from srv
    localStorage.setItem('token', token)

    const userDoc = JSON.parse(atob(token.split('.')[1])).user
    this.props.setUserInState(userDoc)
  } catch (error) {
    console.log('SignupForm error', error)
    this.setState({ error: 'Sign Up Failed - Try Again' })
  }
}
render(){
 const disable = this.state.password !== this.state.confirm;
 return (
   <div>
     <form>
       <label>Name</label>
       <input
         type='text'
         name='name'
         value={this.state.name}
         onChange={this.handleChange}
         required
       />
       <label>Email</label>
       <input
         type='email'
         name='email'
         value={this.state.email}
         onChange={this.handleChange}
         required
       />
       <button type='submit' disabled={disable}>
         SIGN UP
       </button>
     </form>
     <p className='error-message'>&nbsp;{this.state.error}</p>
   </div>
 )
}
}