import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <h1>Navegacion</h1>

            <Link href="/contact">link hacia algun lugar</Link>

            <style jsx>{`

                nav {
                    background-color: #999;
                }

            `}</style>
        </nav>
    )
}

export default NavBar
