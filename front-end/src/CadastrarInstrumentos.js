import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacao } from './navegacao';
import './loginstyle.css';
import './style.css';
import Logogoogle from './componentes/imgs/Google.png';
import stereo from './componentes/imgs/stereo.png'
import { Password } from 'primereact/password';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";
import axios from 'axios'
import { NavLink, useHistory, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Alert } from 'react-bootstrap';



export function CadastroInstrumento() {

    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('');

    const header = <h6>Insira sua senha</h6>;
    const footer = (
        <div>
            <small>A senha deve conter pelo menos 8 caracteres</small>
            <br />
            <small>A senha deve conter pelo menos 1 letra Maiuscula</small>
        </div>
    );

    const onSubmitFunction = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/signup",
            {
                first_name: firstname,
                last_name: lastname,
                email: email,
                password: password
            }
        ).then(res => {
            navigate('/');
        }).catch(error => {
            console.error(error);
            setErrorMsg(error.response?.data);
        })
    }

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <Navegacao />
            <form onSubmit={onSubmitFunction}  >
                <div style={{ background: "#0E243B" }}>
                    <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="row border rounded-5 p-3 bg-white shadow box-area">
                            <div
                                className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                                style={{ background: "#546CCF" }}
                            >
                                <div className="featured-image mb-3">
                                    <img src={stereo} className="img-fluid" style={{ width: "150px" }} alt="featured" />
                                </div>
                                <p
                                    className="text-white fs-2"
                                    style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}
                                >
                                    Coloque os seus equipamentos
                                </p>
                                <small
                                    className="text-white text-wrap text-center"
                                    style={{ width: "17rem", fontFamily: "'Courier New', Courier, monospace" }}
                                >
                                    Encontre o estudio que você quer!!
                                </small>
                            </div>
                            <div className="col-md-6 right-box">
                                <div className=" row align-items-center ">
                                    <div className="header-text mb-400 text-align-center d-flex align-items-center justify-content-center " >
                                        <h2 >Cadastre-se!!</h2>
                                        <p>e muito bom ter você aqui.</p>
                                    </div>
                                    {errorMsg ? (
                                        <Alert variant='danger' className='mx-2'>
                                            {errorMsg}
                                        </Alert>
                                    ) : null}
                                    <form className="mb-1 ">Amplificado de Guitarra:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Caixas:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Amplificado de baixo:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Bateria:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Mesa de som:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Sistema de Retorno:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Monitor de referencia:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Interface:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Guitarra:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div> 
                                    <form className="mb-1 ">Baixo:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Teclado/Synth:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <form className="mb-1 ">Micricofone:</form>
                                    <div className="input-group mb-3">
                                        <input
                                            required
                                            type="text"
                                            className="form-control form-control-lg bg-light fs-6"
                                            placeholder=""
                                            value={''}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>   
                                </div>

                                <div className="input-group mb-3">
                                    <button type='submit' className="btn btn-lg btn-primary w-100 fs-6" style={{ background: '#546CCF' }} >Adicionar Instrumentos</button>
                                </div>
                                <div className="input-group mb-3">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
