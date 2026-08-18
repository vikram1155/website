import { Link, useLocation } from "react-router-dom";
export default function PovPage() {
  const location = useLocation();
  const her = location.pathname.includes("her-pov");
  return (
    <main className="pov-page">
      <p className="eyebrow">{her ? "Her POV" : "His POV"}</p>
      <h1>
        {her
          ? "Her side of the story is currently under construction."
          : "His side of the story is currently under construction."}
      </h1>
      <Link className="button button-dark" to="/">
        ← Back to wedding
      </Link>
    </main>
  );
}
