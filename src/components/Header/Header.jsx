import logo from "../../assets/investment-calculator-logo.png";

export const Header = ({ title }) => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>{title}</h1>
    </header>
  );
};
