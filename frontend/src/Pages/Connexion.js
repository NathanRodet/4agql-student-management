import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useToken } from "../composants/getToken";



export default function Connexion() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [trigger, setTrigger] = useState(false);
    const { data, loading, error } = useToken(trigger ? email : '', trigger ? password : '');

    useEffect(() => {
        if (!loading && data) {
            // Handle successful token fetch
            localStorage.setItem("token", data.login.access_token)
            window.location.replace("/profil")
        } else if (!loading && error) {
        }
    }, [loading, data, error]);

    const connect = () => {
        document.getElementsByClassName('err-mdp')[0].style.display = "none";
        document.getElementsByClassName('err-logs')[0].style.display = "none";
        setEmail(document.getElementById('mail').value);
        setPassword(document.getElementById('mdp').value);
        setTrigger(true);
    }



    return (
        <MDBContainer fluid className="p-3 my-5 h-custom container reducesize">

            <MDBRow className='customRow'>
                <MDBCol col='4' md='6'>
                    <MDBInput wrapperClass='mb-4' label='Mail' id='mail' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Mot de passe' id='mdp' type='password' size="lg" />
                    <div className="alert alert-warning nodisplay err-mdp" role="alert">
                        Le mot de passe n'est pas assez fort
                    </div>
                    <div className="alert alert-warning nodisplay err-logs" role="alert">
                        Identifiant ou mot de passe incorrect!
                    </div>
                    <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className='w-100 mb-4' size='md' onClick={connect}>Valider</MDBBtn>
                        <p className="small mt-2 pt-1 mb-2">Pas encore de compte ? <Link to={"/Inscription"}>Inscription</Link></p>
                    </div>

                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}