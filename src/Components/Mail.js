import React,{ useState} from 'react';
import { send } from 'emailjs-com';

// service_mccg4an
// template_5skrw04


export default function Mail(){
  const serviceId = 'service_mccg4an';
  const templateId ='template_5skrw04';
  const userId = 'user_X3WvHBNDXbyaJrxoVv13k'
  
  const [mail,setMail ] = useState({
      name: '',
      email: '',
      company:'',
      phone: '',
      msg: '',
    });
  
    const onSubmit = (e) => {
      e.preventDefault();


      send(
          serviceId,
          templateId,
          mail,
          userId
      )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('메세지가 보내졌습니다.')
      setMail({
        name: '',
        email: '',
        company:'',
        phone: '',
        message: '',
      })
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
    };
  
    const handleChange = (e) => {
        const {name,value} = e.target
      setMail({ ...mail, [name]: value });
    };

  return (
      <section id='contact03'>
          <div className='inner'>
              <div className="wrap">
                  <h3>
                      SEND A MESSAGE
                  </h3>
                  <form onSubmit={onSubmit}>
                      <div className="inputWrap">
                          <label>
                              NAME
                          </label>
                          <input 
                          name='name'
                          onChange={handleChange} 
                          value={mail.name}
                          placeholder='Name'
                              ></input>
                          <label>
                              EMAIL
                              </label>
                              <input 
                              name='email'
                              onChange={handleChange} 
                              placeholder='Email'
                              value={mail.email}
                              ></input>
                      </div>
                      <div className="inputWrap">
                          <label>
                              COMPANY
                              </label>
                              <input 
                              name='company'
                              onChange={handleChange} 
                              placeholder='Company'
                              value={mail.company}
                              ></input>
                          <label>
                              PHONE NUMBER
                              </label>
                              <input 
                              name='phone'
                              onChange={handleChange}
                              placeholder='Phone number'
                              value={mail.phone}
                              ></input>
                      </div>
                      <label className='message'>
                          MESSAGE
                          </label>
                          <textarea className='textBox' onChange={handleChange} placeholder='Message'
                          name='message'
                          value={mail.message}
                          ></textarea>
                      <div className="buttonWrap">
                          <button type='submit'>
                              SEND
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
  )
}
