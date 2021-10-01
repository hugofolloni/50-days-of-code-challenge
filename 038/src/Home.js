import profile from "./assets/profile.jpeg"

const Home = () => {
    return ( 
        <div className="home">
            <div className="left">
                <div className="title">
                    <h1>Hugo <br/> Folloni</h1>
                </div>
                <div className="description">
                    <h3>Desenvolvedor front-end web em busca <br/> de crescimento pessoal e profissional.</h3>
                </div>
                <div className="button-hire-me">
                    <button>Contact me</button>
                </div>
            </div>
            <div className="right">
                <div className="profile-pic">
                    <img src={ profile } alt="profile-pic"/>
                    <div className="background-circle"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;
<div className="home">

</div>