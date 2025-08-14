export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Esma Hacene. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" target="_blank" className="underline">LinkedIn</a>
          <a href="#" target="_blank" className="underline">GitHub</a>
          <a href="#" target="_blank" className="underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
}