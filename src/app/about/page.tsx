export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#F8FAFC] py-24">
      <div className="max-w-[680px] mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 border-4 border-white shadow-sm flex items-center justify-center">
            <span className="text-gray-400 text-sm">Headshot</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#173B57] mb-4 tracking-tight">About Me</h1>
          <p className="text-lg text-gray-500">Product Manager · Growth Strategist · Builder</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
          <h2 className="text-xl font-semibold text-[#173B57] mb-4">Personal Summary</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p><strong className="text-[#173B57]">Note to self:</strong> This section will contain a personal summary about who you are, your background, and what drives you as a product manager.</p>
            <p><em>Planned content:</em></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional background and experience</li>
              <li>Key achievements and projects</li>
              <li>Product philosophy and approach</li>
              <li>What you&apos;re passionate about</li>
              <li>Personal interests and hobbies</li>
            </ul>
            <p className="text-sm text-gray-500 mt-6 pt-6 border-t border-gray-200">To be updated with actual content and professional headshot.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">Want to connect?</p>
          <a href="mailto:aksharjothi@gmail.com" className="inline-block px-6 py-3 rounded-full bg-[#E87532] text-white font-medium text-sm hover:bg-orange-600 transition-all">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
