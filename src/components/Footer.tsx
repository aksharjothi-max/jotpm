import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #E5E7EB",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "14px", fontWeight: 600, color: "#1D1D1F", textDecoration: "none" }}>
            Jot<span style={{ color: "#E87532" }}>PM</span>
          </Link>
          <span style={{ fontSize: "12px", color: "#86868B" }}>&copy; {new Date().getFullYear()} Akshar Jothi</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/blog" style={{ fontSize: "13px", color: "#86868B", textDecoration: "none" }}>Blog</Link>
          <Link href="/about" style={{ fontSize: "13px", color: "#86868B", textDecoration: "none" }}>About</Link>
          <a href="https://github.com/aksharjothi-max" target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", color: "#86868B", textDecoration: "none" }}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}