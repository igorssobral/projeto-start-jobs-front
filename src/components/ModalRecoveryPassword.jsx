/* eslint-disable react/no-unknown-property */
import Modal from "./Modal";

function ModalRecoveryPassword(props) {
  return (
    <>
      <Modal isVisible={props.isVisible} onClose={props.handleClose}>
        <div className="py-6 px-6 lg:8 text-left relative">
          <button
            className="text-xl absolute px-7 right-0 top-6 text-blue-600"
            onClick={props.handleClose}
          >
            x
          </button>

          <h3 class="mb-1 text-2xl font-medium text-gray-900 dark:text-white ">
            Digite seu email de recuperação
          </h3>
          <h3 class="mb-4 text-sm font-normal text-zinc-500 dark:text-zinc-300">
            Será enviado um email com um link de redefiniçào de senha!
          </h3>
          <form class="space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Seu email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500
        focus:border-blue-500 block w-full p-2.5 dark:border-zinc-700 dark:bg-[#151419] dark:text-zinc-300"
                placeholder="name@company.com"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Enviar
            </button>
            {/* <button
              type='submit'
              className='flex justify-center items-center gap-2 w-full text-white bg-blue-400 hover:bg-blue-600 transition-colors border focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <FaGoogle /> Cancelar
            </button> */}
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalRecoveryPassword;
