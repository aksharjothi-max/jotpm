import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        background: "rgba(255, 255, 255, 0.85)",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ fontSize: "16px", fontWeight: 600, letterSpacing: "-0.02em", color: "#1D1D1F", textDecoration: "none" }}>
          Jot<span style={{ color: "#E87532" }}>PM</span>
        </Link>
        <nav style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "13px", color: "#424245", textDecoration: "none", transition: "color 0.2s" }}>Home</Link>
          <Link href="/blog" style={{ fontSize: "13px", color: "#424245", textDecoration: "none", transition: "color 0.2s" }}>Blog</Link>
          <Link href="/about" style={{ fontSize: "13px", color: "#424245", textDecoration: "none", transition: "color 0.2s" }}>About</Link>
          <Link
            href="/#contact"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              padding: "5px 16px",
              borderRadius: "9999px",
              background: "#E87532",
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}