import styles from './styles.module.css';
import { getChangeMeData } from './functions';
import type { ChangeMeProps } from './types';

export const ChangeMe = ({ children, className }: ChangeMeProps) => {
    const data = getChangeMeData();
    
    return (
        <div className={`${styles.container} ${className || ''}`}>
        <span>{data}</span>
        {children}
        </div>
    );
};