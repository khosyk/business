import React, { useState } from 'react';
import { send } from 'emailjs-com';

// service_mccg4an
// template_5skrw04


export default function Mail() {
    const serviceId = 'service_mccg4an';
    const templateId = 'template_5skrw04';
    const userId = 'user_X3WvHBNDXbyaJrxoVv13k'

    const [err, setErr] = useState({})
    const [success, setSuccess] = useState(false);
    const [mail, setMail] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const check = mail => {
        let errs = {};

        if (!mail.name || mail.name.length < 5) {
            errs.name = '아이디 5글자 이상입력';
        }

        if (!mail.email || mail.email.length < 8 || !/@/.test(mail.email)) {
            errs.email = '이메일주소를 8글자 이상입력';
        }

        if (!mail.message || mail.message.length < 10) {
            errs.message = '남기는말을 10글자 이상입력';
        }
        return errs;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setErr(check(mail));
        const len = Object.keys(err).length;
        try {
            if (len === 0) {
                setSuccess(true)
                if (success) {
                    send(
                        serviceId,
                        templateId,
                        mail,
                        userId
                    )
                        .then((response) => {
                            console.log('메세지 보내기 성공!', response.status, response.text);
                            alert('메세지가 보내졌습니다.')
                            setMail({
                                name: '',
                                email: '',
                                company: '',
                                phone: '',
                                message: '',
                            })
                        })
                }
            }
        } catch (error) {
            console.log('메세지 보내기 실패...', err);
            alert('메세지 보내기에 실패했습니다. 다시 시도해주세요.')
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target
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
                            <div className='inputs'>
                                <div className='topInnerWrap'>
                                    <label>
                                        NAME
                                    </label>
                                    <input
                                        name='name'
                                        onChange={handleChange}
                                        value={mail.name}
                                        placeholder='Name'
                                    ></input>
                                </div>
                                <span className='errTop'>{err.name}</span>
                            </div>
                            <div className='inputs'>
                                <div className='topInnerWrap'>
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
                                <span className='errTop'>{err.email}</span>
                            </div>
                        </div>
                        <div className="inputWrap">
                            <div className='inputs'>
                                <label>
                                    COMPANY
                                </label>
                                <input
                                    className='companyInput'
                                    name='company'
                                    onChange={handleChange}
                                    placeholder='Company'
                                    value={mail.company}
                                ></input>
                            </div>
                            <div className='inputs'>
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
                        </div>
                        <label className='message'>
                            MESSAGE
                        </label>
                        <textarea className='textBox' onChange={handleChange} placeholder='Message'
                            name='message'
                            value={mail.message}
                        ></textarea>
                        <span className='errMessage'>{err.message}</span>
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
