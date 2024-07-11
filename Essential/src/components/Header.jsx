import logo from '../assets/logo.png'

export default function Header(){
    return (
        <header id='header'>
            <img src={logo} alt="image" />
            <h1>Investment Calculator</h1>
        </header>
            
    )
}