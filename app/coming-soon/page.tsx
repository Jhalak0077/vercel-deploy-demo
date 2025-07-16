import { Metadata } from "next";
import styles from "./coming-soon.module.css";

export const metadata: Metadata = {
  title: "Thabho - Coming Soon",
  description: "Stay tuned! Follow Thabho on social media to know when we launch. #NOWIKNOW",
}

// TODO: Implement tailwind css implementation instead of modular css
// TODO: Clean up social links and stuffs on config directory
export default function ComingSoonPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <img
                src="/icons/logo.svg"
                alt="Thabho Logo"
                width={258}
                height={64}
              />
            </div>
            <h1 className={styles.title}>Ready to know about us?</h1>
            <p className={styles.description}>
              Stay tuned by following us on our social handles
            </p>
            <div className={styles.socialIcons}>
              <a target="_black" referrerPolicy="no-referrer" href="https://www.facebook.com/Thabhotech" className={styles.socialIcon} aria-label="Facebook">
                <img
                  src="/icons/fb.svg"
                  alt="Facebook Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a target="_black" referrerPolicy="no-referrer" href="https://www.tiktok.com/@thabhotech" className={styles.socialIcon} aria-label="Tiktok">
                <img
                  src="/icons/tiktok.svg"
                  alt="Ticktock Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a target="_black" referrerPolicy="no-referrer" href="https://www.instagram.com/thabhotech" className={styles.socialIcon} aria-label="Instagram">
                <img
                  src="/icons/insta.svg"
                  alt="Instagram Logo"
                  width={32}
                  height={32}
                />
              </a>
              <a target="_black" referrerPolicy="no-referrer" href="https://www.youtube.com/@ThabhoTechnology" className={styles.socialIcon} aria-label="YouTube">
                <img
                  src="/icons/yt.svg"
                  alt="Youtube Logo"
                  width={32}
                  height={32}
                />
              </a>
            </div>
            <div className={styles.hashtag}>#NOWIKNOW</div>
          </div>
        </div>
      </main>
    </div>
  );
}
