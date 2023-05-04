'use client'

export default function MenuButton() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu')
    const btnMenu = document.getElementById('btnMenu')

    if (menu && btnMenu) {
      menu.classList.toggle('opacity-0')
      menu.classList.toggle('pointer-events-none')
      menu.classList.toggle('animate-open-menu')

      btnMenu.classList.toggle('toggle-btn')

      document.body.classList.toggle('overflow-hidden')
    }
  }

  return (
    <div
      id="btnMenu"
      onClick={toggleMenu}
      className="relative h-8 w-8 z-30 cursor-pointer rounded bg-brand-purple
      md:h-10 md:w-10 lg:h-12 lg:w-12"
    >
      <button
        className="
      before:absolute before:h-1 before:w-8 before:translate-x-0 before:-translate-y-4 before:rounded before:bg-brand-white dark:before:bg-brand-black before:transition-all before:duration-500 
      after:absolute after:h-1 after:w-8 after:translate-x-0 after:translate-y-0 after:rounded dark:after:bg-brand-black after:bg-brand-white after:transition-all after:duration-500 
      md:before:w-10 md:after:w-10
      lg:before:w-12 lg:after:w-12 lg:before:h-2 lg:after:h-2 
      "
      />
    </div>
  )
}
