export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark py-10 text-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="font-display text-lg font-semibold text-white">Your City News &amp; Off Licence</p>
        <p className="mt-1 text-sm">86 Bishopgate St, Leeds LS1 4BB</p>
        <p className="mt-6 text-xs text-white/55">
          © {new Date().getFullYear()} Your City News &amp; Off Licence. Independent shop in Leeds city centre.
        </p>
      </div>
    </footer>
  );
}
