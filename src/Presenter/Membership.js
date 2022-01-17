

function MemberShip({success, handleSubmit,handleChange,handleCheck,handleSelect,err,val,handleCancel}) {
  return (
    <main id='join'>
      <div className="inner">
        <h1>MEMBER<span>S</span>HIP</h1>

        {success ? <div className='Joined'>회원가입을 축하합니다.</div> : null}

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
                {/* gender */}
                <tr>
                  <th scope='row'>
                    GENDER
                  </th>
                  <td className="checkBoxes">

                    <div className='checkBox'>
                      <label htmlFor='male'>Male</label>
                      <input
                        type="radio"
                        id='male'
                        name='gender'
                        onChange={handleCheck}
                      />
                    </div>

                    <div className='checkBox'>
                      <label htmlFor='femal'>Female</label>
                      <input
                        type="radio"
                        id='female'
                        name='gender'
                        onChange={handleCheck}
                      />
                    </div>
                    <span className='err'>{err.gender}</span>
                  </td>
                </tr>

                {/* interests */}
                <tr>
                  <th scope='row'>
                    INTERESTS
                  </th>
                  <td className="checkBoxes">
                    <div className='checkBox'>
                      <label htmlFor='sport'>Sports</label>
                      <input
                        type="checkbox"
                        id='sports'
                        name='interests'
                        onChange={handleCheck}
                      />
                    </div>

                    <div className='checkBox'>
                      <label htmlFor='music'>Music</label>
                      <input
                        type="checkbox"
                        id='music'
                        name='interests'
                        onChange={handleCheck}
                      />
                    </div>

                    <div className='checkBox'>
                      <label htmlFor='game'>Game</label>
                      <input
                        type="checkbox"
                        id='game'
                        name='interests'
                        onChange={handleCheck}
                      />
                    </div>
                    <span className='err'>{err.interests}</span>
                  </td>
                </tr>

                {/* education */}
                <tr>
                  <th scope='row'>
                    <label htmlFor='edu'>EDUCATION</label>
                  </th>
                  <td>
                    <select name="edu" id="edu" onChange={handleSelect}>
                      <option value="">학력을 선택하세요</option>
                      <option value="elementary-school">초등학교 졸업</option>
                      <option value="middle-school">중학교 졸업</option>
                      <option value="high-school">고등학교 졸업</option>
                      <option value="college">대학교 졸업</option>
                    </select>
                    <span className='err'>{err.edu}</span>
                  </td>
                </tr>

                <tr >
                  <td className="btnBox">
                  <input className='btn cancel' type="reset" value='CANCEL' onClick={handleCancel}/>
                  <input className='btn send' type="submit" value='SEND' />
                  </td>
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