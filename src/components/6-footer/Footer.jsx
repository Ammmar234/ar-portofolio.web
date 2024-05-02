
import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex" id = "footer">
      <ul className="flex">
        <li>
          <a href ="#header">Header</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#testimonials">Certifications</a>
        </li>
      </ul>

      <p>© 2024 Ammar-Al-Tayyeb </p>
    </footer>
  );
};

export default Footer;
