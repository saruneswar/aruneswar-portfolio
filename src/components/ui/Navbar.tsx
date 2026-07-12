"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Profile", href: "/#profile" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Official Recognition", href: "/#achievements" },
  { name: "Certificates", href: "/#certifications" },
  { name: "Resume", href: "/#resume" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section (only relevant on home page)
      if (pathname !== "/") return;

      const sections = navLinks.map(link => link.href.split("#")[1]);
      
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset for sticky header
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    const sectionId = href.split("#")[1];

    // If we are not on the home page, route to home with the hash
    if (pathname !== "/") {
      e.preventDefault();
      router.push(href);
      return;
    }

    // If we are on the home page, manually smooth scroll with offset
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // 80px offset for the fixed navbar
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-[#030712]/75 backdrop-blur-[20px] border-b border-muted-foreground/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]" 
          : "py-6 bg-transparent"
      }`}
    >
      <Container className="max-w-7xl mx-auto flex items-center justify-end md:justify-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-5 py-2.5 text-[15px] font-medium transition-all duration-300 relative ${
                pathname === "/" && activeSection === link.href.split("#")[1]
                  ? "text-accent after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px] after:bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-[#030712]/95 backdrop-blur-[20px] border-b border-muted-foreground/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === "/" && activeSection === link.href.split("#")[1]
                  ? "text-accent border-l-2 border-accent bg-accent/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
