import Link from 'next/link';

export default function Index() {
  return (
    <div className="max-w-6xl mx-auto p-12 lg:p-20 bg-core-circle-bg-surface min-h-screen">
      <header className="mb-20">
        <h1 className="text-core-circle-text-main text-6xl font-core-circle-bold tracking-tight mb-6">
          Core Circle <span className="text-core-circle-primary">UI Components</span>
        </h1>
        <p className="text-core-circle-text-muted text-core-circle-xl max-w-3xl leading-relaxed">
          A high-performance, accessible, and beautifully designed component library built for 
          the next generation of Core Circle applications.
        </p>
      </header>

      <section>
        <h2 className="text-core-circle-text-main text-2xl font-core-circle-bold mb-10 pb-4 border-b border-core-circle-border-main">
          Library Components
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Button Card */}
          <Link 
            href="/components/button"
            className="group block p-8 rounded-core-circle-2xl border border-core-circle-border-main bg-white hover:border-core-circle-primary hover:shadow-core-circle-floating transition-all duration-300"
          >
            <div className="w-12 h-12 bg-core-circle-primary/10 rounded-core-circle-xl flex items-center justify-center mb-6 group-hover:bg-core-circle-primary group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </div>
            <h3 className="text-core-circle-text-main text-xl font-core-circle-bold mb-2">Button</h3>
            <p className="text-core-circle-text-muted text-core-circle-sm leading-relaxed">
              Standard button with various variants, sizes, and loading states for all your user interactions.
            </p>
          </Link>

          {/* Placeholder for future components */}
          <div className="group block p-8 rounded-core-circle-2xl border border-dashed border-core-circle-border-main bg-core-circle-bg-page opacity-60">
            <div className="w-12 h-12 bg-core-circle-bg-muted rounded-core-circle-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-core-circle-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-core-circle-text-muted text-xl font-core-circle-medium mb-2">More Coming Soon...</h3>
            <p className="text-core-circle-text-muted text-core-circle-xs leading-relaxed">
              Cards, Inputs, Modals, and more are currently under development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
