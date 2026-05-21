"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Properties", href: "/properties" },
  { name: "Experiences", href: "#experiences" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isLoginOpen || isSignupOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoginOpen, isSignupOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 border border-primary/60 flex items-center justify-center">
                <span className="text-primary font-semibold text-lg tracking-wider">
                  Z
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-semibold tracking-[0.3em] text-sm">
                ZAHW
              </span>
              <span className="text-muted-foreground text-[10px] tracking-[0.2em]">
                HOSPITALITY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-all duration-300">
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-sm tracking-wide text-muted-foreground hover:text-white transition-all duration-300"
            >
              Login
            </button>

            <button
              onClick={() => setIsSignupOpen(true)}
              className="border border-primary/40 px-5 h-10 text-sm tracking-wide hover:bg-primary hover:text-black transition-all duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border">
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 space-y-3">
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full h-12 border border-white/10 text-white"
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    setIsSignupOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full h-12 bg-primary text-black"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {isLoginOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#111111] border border-white/10 p-8 rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold text-white mb-2 tracking-wide">
              Welcome Back
            </h2>

            <p className="text-white/50 text-sm mb-8">
              Login to access your account
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 bg-white/5 border border-white/10 px-4 text-white outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full h-12 bg-white/5 border border-white/10 px-4 text-white outline-none"
              />

              <button className="w-full h-12 bg-primary text-black font-medium hover:opacity-90 transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {isSignupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          onClick={() => setIsSignupOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#111111] border border-white/10 p-8 rounded-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSignupOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-semibold text-white mb-2 tracking-wide">
              Create Account
            </h2>

            <p className="text-white/50 text-sm mb-8">
              Join the ZAHW experience
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-12 bg-white/5 border border-white/10 px-4 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 bg-white/5 border border-white/10 px-4 text-white outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full h-12 bg-white/5 border border-white/10 px-4 text-white outline-none"
              />

              <button className="w-full h-12 bg-primary text-black font-medium hover:opacity-90 transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
