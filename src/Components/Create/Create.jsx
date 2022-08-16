import React , {useState} from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function Create(){
 const [form, setForm] = useState({
   address: '',
   postalCode: '',
   rate: Number,
   
   
 })


// const navigate = useNavigate()

function updateForm(e){
setForm({ 
 ...form, 
 [e.target.name]: e.target.value
})
}

async function onSubmit(e) {
   e.preventDefault();


const newList = { ...form }

let response = await fetch("/api/hostings/", {
     method: "POST",
     headers: {
      'Accept':'application/json',
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newList),
   })
   return await response.json()
   .catch(error => {
     console.log(error);
   });
 
//    setForm({ address: '', postalCode: '', rate: ''})
//    navigate("/");
  }

return (
  <div>
    <form onSubmit={onSubmit}>
      <label>Address</label>
      <input
        type='text'
        value={form.address}
        onChange={updateForm}
        name='address'
      />
      <label>PostalCode:</label>
      <input
        type='text'
        value={form.postalCode}
        onChange={updateForm}
        name='postalCode'
      />
      <label>Rate:</label>
      <input type='text' value={form.rate} onChange={updateForm} name='rate' />
      
      
      <button onClick={updateForm}>Submit</button>
    </form>
  </div>
)
}