import Btnsec from "../Sections/Btnsec";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-start md:items-center">
      <Logo />
      <Btnsec />
    </div>
  );
};

export default Header;
