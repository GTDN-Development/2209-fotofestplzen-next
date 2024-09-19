import Button from "@components/Button";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MdClose } from "react-icons/md";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationModal({ price }: { price?: string }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="c-link-3-a text-primary focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary"
        >
          {`Registrovat se ${price ? `- ${price}` : "zdarma"}`}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="absolute inset-0 z-[200] h-screen w-screen"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-body bg-opacity-80 backdrop-blur-md" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-y-auto rounded-2xl bg-body-100 p-6 text-left shadow-xl transition-all md:p-12">
                  <Dialog.Title
                    as="h3"
                    className="mb-6 text-2xl font-bold leading-6 text-rich md:text-3xl lg:text-4xl"
                  >
                    Registrace na workshopy
                  </Dialog.Title>
                  <p className="mb-10">
                    Platnost registrace ti po odeslání formuláře potvrdíme
                    e-mailem. U placených workshopů zašleme fakturu.
                  </p>
                  <RegistrationForm />

                  <div className="mt-4">
                    <Button
                      rightIcon={<MdClose />}
                      color={"light"}
                      onClick={closeModal}
                      className="w-full sm:w-auto"
                    >
                      Zavřít
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
