import Copyright from "./Copyright";
import NavButton, { ButtonProp } from "./NavButton";

export type NavBarProps = {
  options: ButtonProp[];
  className?: string;
  mobile?: boolean;
};

const NavLinks = ({ options, className, mobile = false }: NavBarProps) => {
  return (
    <>
      <ul className={(className ?? "") + " hidden sm:flex mx-2 px-2"}>
        {options.map((option) => (
          <li key={option.label} className="flex-1" itemProp={option.label}>
            <NavButton data={option} />
          </li>
        ))}
      </ul>
      <div
        className={
          (className ?? "") +
          ` ${
            !mobile
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          } max-h-screen w-full bg-amber-50/75 h-screen inset-0 flex transition-all flex-col fixed sm:hidden`
        }
      >
        <div className="flex-1"></div>
        <ul className="flex flex-col items-center flex-4/6">
          {options.map((option) => (
            <li
              key={option.label}
              className="flex items-center w-full hover:bg-amber-200 transition py-2"
              itemProp={option.label}
            >
              <NavButton className="w-full" data={option} />
            </li>
          ))}
        </ul>
        <Copyright />
      </div>
    </>
  );
};

export default NavLinks;
