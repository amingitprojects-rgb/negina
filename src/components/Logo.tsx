import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  imgClassName?: string;
}

export default function Logo({ className = "", imgClassName = "" }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src="/images/logo.png"
        alt="Negina"
        className={`h-20 w-auto object-contain ${imgClassName}`}
      />
    </Link>
  );
}
