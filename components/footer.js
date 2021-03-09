import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/privacy-policy-and-terms-of-service">
        <div style={{ marginRight: "2rem" }}>
          <p style={{ textAlign: "right", fontSize: "1.8rem" }}>
            privacy policy and terms of service
          </p>
        </div>
      </Link>
    </footer>
  );
}
