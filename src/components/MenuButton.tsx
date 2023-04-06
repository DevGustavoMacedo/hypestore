'use client'

export default function MenuButton() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu')
    const btnMenu = document.getElementById('btnMenu')

    const toggleClasses = (el: HTMLElement, ...cls: string[]) =>
      cls.map((cl: string) => el.classList.toggle(cl))

    if (menu) {
      toggleClasses(
        menu,
        'opacity-0',
        'pointer-events-none',
        'animate-open-menu',
      )
    }

    if (btnMenu) {
      toggleClasses(btnMenu, 'toggle-btn')
    }
  }

  return (
    <div
      id="btnMenu"
      onClick={toggleMenu}
      className="sm:hidden relative h-9 w-12 z-30 cursor-pointer bg-brand-darkblue rounded"
    >
      <button
        className="
      before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-2 before:rounded before:bg-brand-white before:transition-all before:duration-500 
      after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-1 after:rounded after:bg-brand-white after:transition-all after:duration-500 
      "
      />
    </div>
  )
}
