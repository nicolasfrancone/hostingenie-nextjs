"use client"
import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

export default function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    if (isOpen) setOpen(false);
  });

  return (
    <div className="md:hidden" ref={ref}>
      <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
      {isOpen && (
        <div className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out">
          <ul className="grid gap-2">
            <li>
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="font-bold text-xl flex items-center justify-between w-full p-5 rounded-xl bg-gray-800"
                href="/#features"
              >
                Funciones
              </a>
            </li>

            <li>
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="font-bold text-xl flex items-center justify-between w-full p-5 rounded-xl bg-gray-800"
                href="#demos"
              >
                Demos
              </a>
            </li>

            <li>
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="font-bold text-xl flex items-center justify-between w-full p-5 rounded-xl bg-gray-800"
                href="/#benefits"
              >
                Beneficios
              </a>
            </li>

            <li>
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="font-bold text-xl flex items-center justify-between w-full p-5 rounded-xl bg-gray-800"
                href="/#testimonials"
              >
                Testimonios
              </a>
            </li>

            <li>
              <a
                onClick={() => setOpen((prev) => !prev)}
                className="font-bold text-xl flex items-center justify-between w-full p-5 rounded-xl bg-gray-800"
                href="/#about"
              >
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
