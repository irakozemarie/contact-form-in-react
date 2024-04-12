
import { IoMdContact } from "react-icons/io";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-center items-center gap-7 bg-slate-400 w-full h-20">
          <a href="#contact" className="bold text-2xl">
            Contact
          </a>
          <a href="#home">Home</a>
          <div className="flex bg-slate-200">
            <IoMdContact />
            <div className="flex flex-col">
              <span>Ihirwe</span>
              <span>ihirwesolange@gmail.com</span>
            </div>
            <button>SIGN OUT</button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar