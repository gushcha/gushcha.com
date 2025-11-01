import NavbarLinks from '@/components/denis/navbar/NavbarLinks'
import NavbarControls from '@/components/denis/navbar/NavbarControls'

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 sm:top-0 sm:bottom-auto z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3 sm:flex sm:items-center sm:justify-between">
        {/* Mobile: Grid layout with centered burger */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center sm:contents">
          <div className="sm:hidden" /> {/* Empty left spacer */}
          <div className="flex justify-center">
            <NavbarLinks />
          </div>
          <div className="flex justify-end sm:contents">
            <NavbarControls />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
