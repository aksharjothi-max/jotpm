import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(12px)",
        background: "rgba(248, 250, 252, 0.85)",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "0 24px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.02em", color: "#173B57", textDecoration: "none" }}>
          Jot<span style={{ color: "#E87532" }}>PM</span>
        </Link>
        <nav style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <Link href="/" style={{ fontSize: "12px", color: "#6B7280", textDecoration: "none" }}>Home</Link>
          <Link href="/blog" style={{ fontSize: "12px", color: "#6B7280", textDecoration: "none" }}>Blog</Link>
          <Link href="/about" style={{ fontSize: "12px", color: "#6B7280", textDecoration: "none" }}>About</Link>
          <Link
            href="/#contact"
            style={{
              fontSize: "12px",
              fontWeight: 500,
              padding: "4px 12px",
              borderRadius: "9999px",
              background: "#E87532",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
