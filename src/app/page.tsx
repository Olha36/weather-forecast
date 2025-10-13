import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Link href="/auth/signin">
        <button>Sign In</button>
      </Link>

      <Link href="/auth/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}
