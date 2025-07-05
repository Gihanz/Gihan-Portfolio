export default function Resume() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-start pt-20 px-4 md:px-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Resume</h2>

      {/* PDF Viewer */}
      <div className="w-full max-w-6xl flex-1 border rounded shadow-lg overflow-hidden">
        <iframe
          src="/Gihan_Shamike_Liyanage_Resume.pdf"
          title="Resume PDF"
          className="w-full h-[65vh] md:h-[80vh] border-none"
        >
          Your browser does not support embedded PDFs.{" "}
          <a href="/Gihan_Shamike_Liyanage_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Click here to download the resume.
          </a>
        </iframe>
      </div>

      {/* Download link */}
      <p className="mt-4 text-center">
        <a
          href="/Gihan_Shamike_Liyanage_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View or Download My Resume
        </a>
      </p>
    </section>
  );
}
