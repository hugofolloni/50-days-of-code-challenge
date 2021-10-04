import profile from "./assets/profile.jpeg"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import twitter from "./assets/twitter.svg"
import instagram from "./assets/instagram.svg"

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
                    <div className="links-home">
                        <a href="https://github.com/hugofolloni"><img src={ github } alt="gh"/></a>
                        <a href="https://linkedin.com/in/hugofolloni"><img src={ linkedin } alt="gh"/></a>
                        <a href="https://twitter.com/hugofolloni"><img src={ twitter } alt="gh"/></a>
                        <a href="https://instagram.com/hugofolloni"><img src={ instagram } alt="gh"/></a>
                    </div>
                    <div className="background-circle"></div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;
<div className="home">

</div>