import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="mt-10 mx-10 flex items-center justify-between">
      <p className="text-base font-medium ml-12 gap-4 text-slate-900 dark:text-slate-50">
        © 2024 Start JOBS Code All Rights Reserved
      </p>
      <div className="flex items-center justify-end text-base font-medium text-slate-900 dark:text-slate-50">
        <div className="flex flex-col items-end gap-4 mr-12">
          {/* Texto acima dos ícones das redes sociais*/}
          <p className="text-sm text-slate-900 dark:text-slate-50">
            Acompanhe nossas redes sociais
          </p>

          {/* Ícones das redes sociais */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="text-slate-900 dark:text-slate-50 hover:text-blue-500 dark:hover:text-blue-500 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};