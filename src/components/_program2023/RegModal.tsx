import { Dialog as Modal, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// Icons
import { MdClose } from "react-icons/md";
import RegistrationForm from "./RegistrationForm";

export default function RegModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="c-link-3-a text-primary"
      >
        Zaregistrovat
      </button>

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
            <Modal.Overlay className="fixed inset-0 z-[200] h-screen w-screen bg-body/80 backdrop-blur-md" />
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
            <Modal.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-body-100 p-6 text-left align-middle shadow-xl transition-all">
              <Modal.Title
                as="h3"
                className="text-lg font-medium leading-6 text-rich"
              >
                Registrace
              </Modal.Title>
              <RegistrationForm />

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Registrovat
                </button>
              </div>
            </Modal.Panel>
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
    </>
  );
}
