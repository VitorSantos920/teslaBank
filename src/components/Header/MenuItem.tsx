import { CaretDown } from '@phosphor-icons/react';

interface MenuItemProps {
  text: string;
  url: string;
}
export default function MenuItem({ text, url }: MenuItemProps) {
  return (
    <li className="header__menu-item">
      <a href={url}>
        {text}
        <CaretDown fill="#E41D37" weight="bold" />
      </a>
    </li>
  );
}
