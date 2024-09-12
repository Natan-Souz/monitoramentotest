import React from "react";  

const Register = () =>{
    return(
        <div className="a">
            <span className="title">Valores </span>
            <form>
                <input type="text" placeholder="teste1 " />
                <input type="email" placeholder="teste1" />
                <input type="password" placeholder="teste1" />
                <button>Registrar</button>
            </form>
            <p>Você já tem conta? Login</p>

        </div>
    )
}

export default Register