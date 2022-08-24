import { useState, Fragment } from "react";
import { Dialog as Modal, Transition } from "@headlessui/react";

// Icons
import { BsFillPlayFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function Aftermovie() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section id="aftermovie">
      <button
        className="group relative aspect-[16/9] w-full cursor-pointer bg-slate-700/50"
        onClick={openModal}
      >
        <video
          autoPlay
          loop
          muted
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/ffp-19-preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="z-1 absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-transparent">
            <BsFillPlayFill className="z-10 text-3xl text-body" />
            <div className="absolute inset-0 -z-10 h-16 w-16 rounded-full bg-white transition-transform duration-300 ease-out-back group-hover:scale-125"></div>
          </div>
        </div>
      </button>
      <span className="pt-8 text-xs font-medium uppercase tracking-wider">
        Přehrát Aftermovie
      </span>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-[200] h-screen w-screen"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-default duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-default duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <Modal.Overlay className="fixed inset-0 z-[200] h-screen w-screen bg-body bg-opacity-80 backdrop-blur-md" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition duration-400"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* Obsah modalu - container pro obrázek */}
            <div className="relative top-1/2 bottom-1/2 z-[200] mx-auto w-[90%] max-w-4xl -translate-y-1/2 transform">
              <div className="aspect-[16/9]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/bUianikiilw"
                  title="YouTube video player"
                  frameBorder="0"
                  className="h-full w-full bg-gray-400"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-default duration-default"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-default duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Tlačítko pro zavření (křížek) */}
            <button
              type="button"
              onClick={closeModal}
              className="duration-default rounded-default fixed top-6 right-6 z-[210] bg-transparent p-2 text-4xl text-white transition-colors hover:bg-white hover:bg-opacity-15 focus:bg-white focus:bg-opacity-15"
            >
              <span className="sr-only">Zavřít</span>
              <MdClose />
            </button>
          </Transition.Child>
        </Modal>
      </Transition>
    </section>
  );
}