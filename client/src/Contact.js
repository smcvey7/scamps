import React, {useState} from "react";

function Contact(){
  const [formData, setFormData] = useState({
    message: '',
    email: '',
    name: '',
    subject: ''
  })
  // display errors from form validation
  const [errors, setErrors] = useState(null)
  // indicate when loading in submit button
  const [isLoading, setIsLoading]=useState(false)
  // update state when form changes
  function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  function resetFormData(){
    setFormData({
      message: '',
      email: '',
      name: '',
      subject: ''
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setErrors(null)
    setIsLoading(true)
    fetch('/messages', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r)=>{
      setIsLoading(false)
      if (r.ok){
        alert("Your message has been sent")
        resetFormData()
        setErrors(null)
      }else{
        r.json().then((error_list)=>setErrors(error_list.errors))
      }
    })
  }

  return(
    <div>
      <h2>Contact</h2>
      <div className="flexContainer horizontal spaceAround">
        <form id="form" onSubmit={handleSubmit}>
          name:<br/><input name="name" value={formData.name} onChange={handleChange} /><br/>
          email:<br/><input name="email" value={formData.email} onChange={handleChange} /><br/>
          subject:<br/><input name="subject" value={formData.subject} onChange={handleChange} /><br/>
          message:<br/><textarea name='message'  value={formData.message} onChange={handleChange} /><br/>
          <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
        </form>
        <div className="errors">
          {errors ? 
            <ul>{errors.map((error) => <li key={error}>{error}</li>)}</ul> : null}
        </div>
      </div>
    </div>
  )
}

export default Contact