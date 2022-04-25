import styles from './ButtonHome.module.scss'
import { Button } from '@mantine/core';

function ButtonHome({ text, onclick }) {
    return (
        <div className={styles.buttonContainer}>
            <Button fullWidth  radius="md" size="lg" uppercase onClick={onclick}>
                {text}
            </Button>
        </div>
    );
}

export default ButtonHome;