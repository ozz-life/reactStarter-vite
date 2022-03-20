import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
        <footer>
        <hr/>
        <address className={styles.onRight}>
        Stanislav Oz, <a href="https://ozz.life/">&#x3c;https://ozz.life/&#x3e;</a> , 2022
        </address>
        </footer>
        </>
    )
}

export default Footer