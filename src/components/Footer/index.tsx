import { BiLogoGithub } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 p-4 h-[70px] flex items-center justify-between">
      <p>
        <a
          href="https://jigsaw.w3.org/css-validator/check/referer"
          target="_blank"
        >
          <img
            className="border-none w-[88px]"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="CSS válido!"
          />
        </a>
      </p>
      <a href="https://github.com/zolppy/balance" target="_blank">
        <BiLogoGithub className="text-4xl" />
      </a>
    </footer>
  );
};

export default Footer;
