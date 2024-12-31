import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {ToastProviderContext} from "../ToastProvider";

function ToastShelf() {
  const {toasts, removeToast} = React.use(ToastProviderContext)
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
        {toasts && toasts.map(toast => (
            <li key={toast.id} className={styles.toastWrapper}>
                <Toast
                    message={toast.message}
                    variant={toast.variant}
                    onDismiss={() => removeToast(toast.id)}
                />
            </li>
        ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
