import "../styles/home.css";

export default function Banner() {
    return (
            <div className={"bannerPic"}>
                <h1 className={"bannerTxt"}>Simplifier la gestion de votre école</h1>
                <a href="/connexion">Connectez vous pour commencer !</a>
            </div>
    )
}

