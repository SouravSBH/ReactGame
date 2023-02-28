import React, { useContext } from 'react';
import styles from './ModalComponent.module.css';
import { UIContext } from '../../provider/UIProvider';

function ModalComponent() {
    const [ ui, setUi ] = useContext(UIContext);
    return (
        <>
            {
                ui.showModal && <div onClick={() => {
                    ui.showModal = false;
                    ui.disablePlayButton = false;
                    setUi({ ...ui });

                }} className={`${styles.outer} ${styles.show} ${styles.modal}`}>
                    <h1 style={{ backgroundColor: ui.modalColor }} className={`${styles.inner} ${styles.modal}`}>
                        <div className={`${styles.modal} ${styles.main}`}>
                            {ui.modalText}
                        </div>
                    </h1>
                </div>
            }
        </>
    );
}

export default ModalComponent;