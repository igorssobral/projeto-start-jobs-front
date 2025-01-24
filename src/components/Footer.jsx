export const Footer = ()=> {
    return (
        <footer className="mt-10 mx-10 flex items-center justify-between">
        {/* // className="flex flex-wrap items-center justify-between gap-4 pt-4"> */}
            <p className="text-base font-medium text-slate-900 dark:text-slate-50">© 2024 Start JOBS Code All Rights Reserved</p>
            <div className="flex items-center justify-end text-base font-medium text-slate-900 dark:text-slate-50">
            
                <a 
                    href="#"
                    className="link">
                        Desenvolvido por #ash-Tag Systems
                </a>
            </div>
        </footer>
    );
};