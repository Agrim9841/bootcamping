import Link from 'next/link'
import styles from "./navbar.module.css";

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <div className={styles.navleft}>
                <Link href="/"><a className={styles.navitem}>General</a></Link>
                <Link href="/announcements"><a className={styles.navitem}>Announcements</a></Link>
                <Link href="/members"><a className={styles.navitem}>Members</a></Link>
            </div>
            <div>Login</div>
        </div>
    )
}

export default Navbar;