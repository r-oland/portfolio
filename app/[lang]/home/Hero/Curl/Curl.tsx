// Components==============
import { MotionPath } from 'utils/clientMotion';
import styles from './Curl.module.scss';
// =========================

export default function Curl() {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 511 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <MotionPath
          d="M0.999998,24.8545C76.9701,17.4 66.8408,57.6545 117.488,56.1636C168.134,54.6727 130.149,1 180.796,1C231.443,1 274.493,83 330.204,83C385.915,83 403.642,9.19974 373.254,15.9088C346.241,21.8727 413.771,75.1725 459.353,78.527C484.677,80.3906 499.871,70.0785 510,65.1088"
          stroke="#bdd3cc"
          strokeWidth="2"
          animate={{ pathLength: 1 }}
          initial={{ pathLength: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </svg>
    </div>
  );
}
