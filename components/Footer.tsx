// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} WellnessPlatform. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}