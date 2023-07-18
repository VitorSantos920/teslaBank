import { User } from '@phosphor-icons/react';
import { HeaderContainer } from './style';
import MenuItem from './MenuItem';

export function Header() {
  return (
    <HeaderContainer className="header flex">
      <div className="header__left-side flex">
        <a href="#" className="header__logo">
          <img src="/logo.svg" alt="Logo Tesla Bank" />
        </a>

        <nav className="header__menu-navigation">
          <ul className="header__menu-items flex">
            <MenuItem text="Tesla Bank" url="#" />
            <MenuItem text="Conta Digital" url="#" />
            <MenuItem text="Pra você" url="#" />
          </ul>
        </nav>
      </div>

      <div className="header__right-side">
        <a href="#" className="flex">
          Login
          <User size={25} />
        </a>
      </div>
    </HeaderContainer>
  );
}
