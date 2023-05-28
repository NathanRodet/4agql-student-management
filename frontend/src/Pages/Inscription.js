import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import { useAccount } from '../composants/createAccount';

export default function Inscription() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [mail, setMail] = useState('');
    const [mdp, setMdp] = useState('');

    const { createAccount, data, loading, error } = useAccount();

    const onSubmit = async () => {
        try {
            const { data } = await createAccount({ variables: { nom, prenom, mail, mdp } });
            // handle successful account creation here (e.g., redirect to another page)
        } catch (error) {
            // handle error here
            console.error('Error creating account:', error);
        }
    };

    return (
        <MDBContainer fluid className='my-5' >
            <MDBRow className='g-0 align-items-center container' style={{ margin: "auto", width: "65vw" }}>
                <MDBCol col='6'>
                    <MDBCard className='my-5 cascading-right eighty' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 shadow-5 text-center'>
                            <h2 className="fw-bold mb-5">Inscription</h2>
                            <div class="flexed">
                                <MDBInput wrapperClass='mb-4' label='Prénom' id='prenom' type='text' onChange={(e) => setPrenom(e.target.value)} />
                                <MDBInput wrapperClass='mb-4' label='Nom' id='nom' type='text' onChange={(e) => setNom(e.target.value)} />
                            </div>
                            <MDBInput wrapperClass='mb-4' label='Email' id='mail' type='email' onChange={(e) => setMail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Mot de passe' id='form4' type='password' onChange={(e) => setMdp(e.target.value)} />
                            <MDBBtn className='w-100 mb-4' size='md' onClick={onSubmit}>Valider</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
