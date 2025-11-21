import NavbarLinks from '@/components/denis/navbar/NavbarLinks'
import NavbarControls from '@/components/denis/navbar/NavbarControls'

const Navbar = () => {
  return (
    <nav 
      className="
        fixed z-50
        bottom-0 left-0 right-0 sm:top-0 sm:bottom-auto
        min-h-[64px]
        "
    >
      <div 
        className="
          absolute 
          bottom-0 left-0 right-0 top-0
          bg-white/60 dark:bg-slate-900/60 
          backdrop-blur-sm shadow-lg
        "
      />
      <div
        className="
          absolute 
          bottom-0 left-0 right-0 top-0
        "
      >
        <div className="container mx-auto px-4 py-3 sm:flex sm:items-center sm:justify-between max-w-prose">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center sm:contents">
            <div className="sm:hidden" />{' '}
            <div className="flex justify-center">
              <NavbarLinks />
            </div>
            <div className="flex justify-end sm:contents">
              <NavbarControls />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
