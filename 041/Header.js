import { HashLink } from 'react-router-hash-link';

const Header = () => {    
    return ( 
        <div className="header">
            <div className="left">
                <HashLink className='page-title' smooth to='/#home'><h3>hugofolloni</h3></HashLink>
            </div>
            <div className="right">
                <HashLink smooth to='/#skills'>Skills</HashLink>
                <HashLink smooth to="/#works">Works</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
            </div>
        </div>
     );
}
 
export default Header;