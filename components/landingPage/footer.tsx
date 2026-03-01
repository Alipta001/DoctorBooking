export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <h2 className="text-3xl font-black italic uppercase mb-6">DocReserve</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Redefining the standard of private healthcare access through technology and human-centric design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">Platform</h5>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Specialists</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Emergency</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Enterprise</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-6">Company</h5>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Philosophy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
            &copy; 2026 DocReserve Global. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-600">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}