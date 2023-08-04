import React from 'react'
import "./contact.scss"
import contact  from "../images/contact.png"
const Contact = () => {
  return (
    <div className='contact'>
      <div className="container">
        <div className="row">
             <div className="col-6">
                    <div className="content">
                        <form >
                            <div className="input_section">

                              <label className='lable' htmlFor="name">name</label>
                                <input type="text" name='name' id='name' placeholder='Your name' required />

                            </div>
                              <div className="input_section">

                                <label className='lable' htmlFor="email">email</label>
                                <input type="text" name='email' id='email' placeholder='email' required />

                            </div>
                            <div className="input_section">

                                <label className='lable' htmlFor="phone">phone</label>
                                <input type="text" name='phone' id='phone' placeholder='Your phone' required />
    
                            </div>
                            <div className="input_section">

                                  <label className='lable' htmlFor="massage">massage</label>
                                  <textarea className='massage' name="massage" id="massage" cols="20" rows="5"></textarea>
                                
                            </div>
                            <button type='submit'> submit</button>
                        </form>
                    </div>
             </div> 
             <div className="col-6">
                      <div className="image">
                          <img src={contact} alt="contact" />
                      </div>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Contact