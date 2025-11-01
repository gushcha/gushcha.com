import LocaleSelector from '@/components/denis/navbar/LocaleSelector'
import ThemeToggle from '@/components/shared/theme/ThemeToggle'

const NavbarControls = () => {
  return (
    <div className="flex items-center gap-3">
      <LocaleSelector />
      <div className="sm:hidden">
        <ThemeToggle isMobile/>
      </div>
    </div>
  )
}

export default NavbarControls
