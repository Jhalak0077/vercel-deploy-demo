'use client';
interface Props {
  onClick: () => void;
}

const HamburgerButton = ({ onClick }: Props) => (
  <button onClick={onClick}>
    <span className="text-white text-2xl">&#9776;</span>
  </button>
);

export default HamburgerButton;
