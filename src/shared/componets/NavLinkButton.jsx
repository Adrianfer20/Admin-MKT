import { NavLink } from "react-router-dom";

export function NavLinkButton({ to, icon: Icon, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `nav-link ${isActive ? "nav-link-active" : "nav-link-hover"}`
      }
    >
      <Icon className="text-lg" />
      <span className="hidden md:block">{label}</span>
    </NavLink>
  );
}