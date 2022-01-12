import { useEffect, useState } from "react";

function MemberShip(){
  const initVal={
    userid : '',
    pwd1 : '',
    pwd2 : '',
    email: '',
    comments: ''
  }
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {   
    const {name, value} = e.target;     
    setVal({...val, [name]: value});     
  }

  //submit
  const handleSubmit = e =>{ 
    e.preventDefault();   
    setIsSubmit(true);
    setErr(check(val));  

  }

  // return errs
  const check = val=>{
    let errs = {};  
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;

    if( !val.userid || val.userid.length <5 ){
      errs.userid='아이디 5글자 이상입력';
    } 
    if( !val.pwd1 || val.pwd1.length<5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)){
      errs.pwd1='비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함';
    }
    if( !val.email || val.email.length <8 || !/@/.test(val.email) ){
      errs.email='이메일주소를 8글자 이상입력';
    }
    if( !val.pwd2 || val.pwd1 !== val.pwd2 ){
      errs.pwd2='두개의 비밀번호를 동일하게 입력';
    }
    if( !val.comments || val.comments.length <10 ){
      errs.comments='남기는말을 10글자 이상입력';
    }
    return errs;
  }

 
//using useeEffect, validate the identification
  useEffect(()=>{        
    console.log(err);
    const len =  Object.keys(err).length;
    if(len === 0 && isSubmit){
      console.log('인증 성공');
      setSuccess(true);     
    }else{
      console.log('인증 실패');
      setSuccess(false);
    }
  },[err]);

  return (
      <main id='join'>
        <div className="inner">
        <h1>MEMBER<span>S</span>HIP</h1>

        {success ? <div className='Joined'>회원가입을 축하합니다.</div> : null }
        <div className="textBox">
            <strong>We certainly recommend our special membership.</strong>
            <span>Whatever, you want the result, we will get it for you</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum architecto aperiam aliquam accusamus, ipsam reprehenderit distinctio eligendi facere tempora elser woble.
            </p>
        </div>
        <div className='info'>
            <h2>
                ■ 회원가입 약관
            </h2>
            <div>
                <h4>
                    1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam culpa in commodi aspernatur et maxime! Minima, architecto! Quaerat perferendis rerum pariatur aliquid blanditiis nihil numquam odit quam non magnam?
                </p>
                <h4>
                    2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, hic.
                </h4>
                <p>
                    
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia minima velit esse ducimus optio saepe voluptate sequi? Harum atque exercitationem quibusdam dolores aut asperiores voluptatum quos? Dolorem nostrum tenetur sed id deserunt dolorum, veritatis accusamus esse praesentium quia perferendis porro omnis delectus exercitationem corrupti consequatur ratione tempore autem. Vitae, illo.
                </p>
                <h4>
                    3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptate!
                </h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem veniam assumenda quidem sequi, hic voluptas placeat. Error, eligendi repellendus? Illum neque esse hic accusantium. Mollitia nobis iste nulla temporibus itaque. Maiores natus corrupti laboriosam reprehenderit eveniet, perspiciatis tempore recusandae tenetur.
                </p>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>■ 회원가입 형식</legend>

            <table>
              <caption className='h'> 회원가입 입력</caption>
              <tbody>

                <tr>
                  <th scope='row'>
                    <label htmlFor="userid">USER ID</label>
                  </th>
                  <td>
                    <input 
                      type="text" 
                      id='userid'
                      name='userid'
                      placeholder='아이디를 입력하세요'
                      value={val.userid}
                      onChange={handleChange}
                    />
                    <span className='err'>{err.userid}</span>
                  </td>
                </tr> 

                <tr>
                  <th scope='row'>
                    <label htmlFor="pwd1">PASSWORD</label>
                  </th>
                  <td>
                    <input 
                      type="password" 
                      id='pwd1'
                      name='pwd1'
                      placeholder='비밀번호를 입력하세요'
                      value={val.pwd1}
                      onChange={handleChange}
                    />
                    <span className='err'>{err.pwd1}</span>
                  </td>
                </tr>

                <tr>
                  <th scope='row'>
                    <label htmlFor="pwd2">RE-PASSWORD</label>
                  </th>
                  <td>
                    <input 
                      type="password" 
                      id='pwd2'
                      name='pwd2'
                      placeholder='비밀번호를 재입력하세요'
                      value={val.pwd2}
                      onChange={handleChange}
                    />
                    <span className='err'>{err.pwd2}</span>
                  </td>
                </tr>

                <tr>
                  <th scope='row'>
                    <label htmlFor="email">E-MAIL</label>
                  </th>
                  <td>
                    <input 
                      type="text" 
                      id='email'
                      name='email'
                      placeholder='이메일 주소를 입력하세요'
                      value={val.email}
                      onChange={handleChange}
                    />
                    <span className='err'>{err.email}</span>
                  </td>
                </tr>

                <tr>
                  <th scope='row'>
                    <label htmlFor="comments">COMMENTS</label>
                  </th>
                  <td>
                    <textarea
                      col='30'
                      row='10'
                      id='comments'
                      name='comments'
                      placeholder='남기는 말을 적어주세요'
                      value={val.comments}
                      onChange={handleChange}
                    ></textarea>
                    <span className='err'>{err.comments}</span>
                  </td>
                </tr>

                <tr className="btnBox">
                    <input className='btn cancel' type="reset" value='CANCEL' />
                    <input className='btn send' type="submit" value='SEND' />
                </tr> 
              </tbody>       
            </table>
          </fieldset>
        </form>
      </div>
    </main>
  )
}

export default MemberShip;