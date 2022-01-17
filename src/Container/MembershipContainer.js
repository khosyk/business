import React,{ useEffect, useState }  from 'react';
import Membership from '../Presenter/Membership';

export default function MembershipContainer(){
    
  const initVal = {
    userid: '',
    pwd1: '',
    pwd2: '',
    email: '',
    comments: ''
  }
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  }

  const handleCheck = e => {
    const { name } = e.target;
    const isCheck = e.target.checked;
    setVal({ ...val, [name]: isCheck });
  }

  const handleSelect = e => {
    const { name } = e.target;
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({ ...val, [name]: isSelected });
  }

  //submit
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
    setErr(check(val));
  }

  //cancel
  const handleCancel = () =>{
      setVal(initVal);
  }

  // return errs
  const check = val => {
    let errs = {};
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;

    if (!val.userid || val.userid.length < 5) {
      errs.userid = '아이디 5글자 이상입력';
    }
    if (!val.pwd1 || val.pwd1.length < 5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)) {
      errs.pwd1 = '비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함';
    }
    if (!val.email || val.email.length < 8 || !/@/.test(val.email)) {
      errs.email = '이메일주소를 8글자 이상입력';
    }
    if (!val.pwd2 || val.pwd1 !== val.pwd2) {
      errs.pwd2 = '두개의 비밀번호를 동일하게 입력';
    }
    if (!val.comments || val.comments.length < 10) {
      errs.comments = '남기는말을 10글자 이상입력';
    }
    if (!val.gender) {
      errs.gender = '성별을 선택하세요';
    }
    if (!val.interests) {
      errs.interests = '관심사를 하나이상 선택하세요.';
    }
    if (!val.edu) {
      errs.edu = '학력을 선택해주세요.'
    }
    return errs;
  }


  //using useeEffect, validate the identification
  useEffect(() => {
    const len = Object.keys(err).length;
    if (len === 0 && isSubmit) {
      console.log('인증 성공');
      setSuccess(true);
    } else {
      console.log('인증 실패');
      setSuccess(false);
    }
  }, [err]);

    return(        
        <Membership success={success} handleSubmit={handleSubmit}handleChange={handleChange}handleCheck={handleCheck}handleSelect={handleSelect}err={err}val={val} handleCancel={handleCancel}/>)
}