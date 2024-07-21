import Link from 'next/link';
import Image  from 'next/image';

import classes from './main-header.module.css'

import logoImg from  '@/assets/logo.png'


export default function MainHeader () {
    return (
        <header className={classes.header}>
            
            <Link className={classes.logo} href='/'>
                <Image 
                    src={logoImg.src} 
                    alt='Hi'
                    height='300'
                    width='300'
                 />
                Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Meals</Link>
                    </li>
                    <li>
                        <Link href='/meals/share'>Share</Link>
                    </li>
                    <li>
                        <Link href='/community'>Community</Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}