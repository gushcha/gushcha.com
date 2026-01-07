import {FC} from "react";
import Button from "@/components/grigory/button/Button";

const Navbar: FC = () => {
  return (
    <nav className="flex items-center gap-4 justify-end h-20">
      <a href="#about">About</a>
      <a href="#film_audio_post_mixing">Film Audio Post/Mixing</a>
      <a href="#location_sound">Location Sound</a>
      <a href="#music_mixing">Music Mixing</a>
      <Button href="#contacts">Contacts</Button>
    </nav>
  )
}

export default Navbar;