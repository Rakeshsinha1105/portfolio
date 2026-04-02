import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-gray-600 text-sm">
        Designed &amp; built by{" "}
        <span className="text-gray-400">{personal.name}</span>
        {" · "}
        <span className="text-gray-600">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
