import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return ( 
<footer className="bg-slate-950 border-t border-gray-800 text-gray-400">
  <div className="container mx-auto px-4 py-8">
    
    {/* Main footer content with columns */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* Column 1: Copyright & Brand */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Rishab Singh</h3>
        <p className="text-sm">&copy; 2025 Rishab Singh. <br /> All Rights Reserved.</p>
      </div>
      
      {/* Column 2: Built With */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Built With</h3>
        <ul className="space-y-1 text-sm">
          <li><a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Next.js</a></li>
          <li><a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Framer Motion</a></li>
          <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tailwind CSS</a></li>
        </ul>
      </div>

      {/* Column 3: Connect */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
        <div className="flex justify-center md:justify-start gap-6 mb-4">
          <a href="https://github.com/rishabingh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://x.com/rishabsiingh" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rishabsingh2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
        <a href="mailto:rishabsiingh@outlook.com" className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors">
          <Mail size={16} />
          rishabsiingh@outlook.com
        </a>
      </div>

    </div>

    {/* Credits Section */}
    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs">
      <h4 className="font-semibold text-gray-200 mb-3">Attributions & Credits</h4>
      <ul className="space-y-2">
        <li>Main icons by <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Lucide Icons</a>, SVGs from <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">SVGRepo</a>.</li>
        <li>All photos sourced from <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Unsplash</a>.</li>
        <li>
          Photo credits: <a href="https://unsplash.com/@timoun" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Tim Oun</a> (mountain), {' '}
          <a href="https://unsplash.com/@inakihxz" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Iñaki del Olmo</a> (bookshelf), {' '}
          <a href="https://unsplash.com/@wasdrew" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Andras Vas</a> (laptop).
        </li>
      </ul>
    </div>

  </div>
</footer>
  )
}

export default Footer