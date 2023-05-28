import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
mutation CreateUser($email : String!, $firstName : String!, $lastName : String!, $password : String!, $pseudo : String!) {
    createUser(
        createUserInput: {email: $email, firstName: $firsname, lastName: $lastName, password: $password, pseudo: $pseudo}
    ) {
        email
        firstName
        id
        lastName
        password
        pseudo
        role
    }
}


`;

export const useAccount = (nom, prenom, mail, pass) => {
    const { data, loading, error } = useMutation(REGISTER, {
        variables: { email: mail, firstname: prenom, lastname: nom, password: pass },
      });
    
    return { data, loading, error };
};
