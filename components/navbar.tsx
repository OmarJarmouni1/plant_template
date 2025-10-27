"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";

import { Logo, SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Separator } from "./ui/separator";

export const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [lineWidth, setLineWidth] = useState(0);
  const [lineLeft, setLineLeft] = useState(0);
  const navRef = useRef<HTMLUListElement>(null);
  const homeHref = siteConfig.navItems.find(
    (item) => item.label === "Home"
  )?.href; // Get the href for Home

  useEffect(() => {
    const updateUnderline = () => {
      const nav = navRef.current;
      if (nav) {
        const item = hoveredItem
          ? nav.querySelector(`a[data-href="${hoveredItem}"]`)
          : nav.querySelector(`a[data-href="${homeHref}"]`); // Default to Home if no item is hovered
        if (item) {
          const navRect = nav.getBoundingClientRect();
          const itemRect = item.getBoundingClientRect();
          setLineWidth(itemRect.width);
          setLineLeft(itemRect.left - navRect.left);
        }
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [hoveredItem, homeHref]);

  const handleMouseEnter = (href: string) => {
    setHoveredItem(href);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="text-[#46a358] pt-2 font-Jost font-bold">
              GREENSHOPT
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        {" "}
        <NavbarItem className="flex justify-center items-center w-full">
          <ul
            ref={navRef}
            className="hidden lg:flex gap-8 justify-center text-center relative" // Increase gap to 8
          >
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href} className="px-4">
                {" "}
                {/* Add horizontal padding */}
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "relative data-[active=true]:text-primary data-[active=true]:font-medium font-cera"
                  )}
                  href={item.href}
                  data-href={item.href}
                  onMouseEnter={() => handleMouseEnter(item.href)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
            {/* This will be the animated line */}
            <motion.div
              className="absolute h-0.5 bg-[#46a358]"
              initial={false}
              animate={{
                width: lineWidth,
                left: lineLeft,
                top: "43px", // Adjust this value to increase or decrease the space
                opacity: hoveredItem || homeHref ? 1 : 0, // Always visible if Home is the active item
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          </ul>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z"
              fill="#3D3D3D"
            />
            <circle
              cx="23.001"
              cy="8"
              r="7"
              fill="#46A358"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M25.121 8.83C25.121 7.58 24.101 6.62 22.951 6.62C22.841 6.62 22.751 6.63 22.661 6.65L24.251 4.4H23.001L21.351 6.73C21.121 7.06 20.951 7.31 20.841 7.49C20.731 7.67 20.641 7.87 20.561 8.1C20.491 8.32 20.451 8.56 20.451 8.82C20.421 10.12 21.531 11.13 22.781 11.11C24.041 11.11 25.121 10.12 25.121 8.83ZM24.071 8.83C24.071 9.2 23.941 9.52 23.691 9.77C23.441 10.02 23.141 10.14 22.781 10.14C22.411 10.14 22.111 10.02 21.861 9.77C21.611 9.52 21.491 9.2 21.491 8.83C21.491 8.46 21.611 8.15 21.861 7.9C22.111 7.65 22.411 7.52 22.781 7.52C23.141 7.52 23.441 7.65 23.691 7.9C23.941 8.15 24.071 8.46 24.071 8.83Z"
              fill="white"
            />
          </svg>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className={`text-sm text-white bg-[#46a358] rounded-md font-Jost`}
            href={siteConfig.links.sponsor}
            variant="flat"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1601 10.1006H8.12598"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <svg
            width="31"
            height="24"
            viewBox="0 0 31 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1567 20.25H9.89163C6.79003 20.25 4.26667 17.7267 4.26667 14.6251V8.85947C4.26667 5.9762 2.82958 3.30739 0.422521 1.72031C-0.00975775 1.43531 -0.129101 0.853876 0.155897 0.421598C0.440896 -0.0107278 1.02228 -0.130118 1.45465 0.154974C2.82874 1.06097 3.94351 2.2559 4.74067 3.63167C4.91293 3.82466 6.30202 5.29699 8.57919 5.29699H19.3748C22.3201 5.24191 24.6254 8.19769 23.8554 11.0406L22.6126 15.9939C21.9839 18.4998 19.7404 20.25 17.1567 20.25ZM5.90513 6.64234C6.06099 7.36238 6.14166 8.10483 6.14166 8.85947V14.6251C6.14166 16.6928 7.8239 18.375 9.89163 18.375H17.1567C18.8792 18.375 20.3748 17.2082 20.794 15.5376L22.0367 10.5844C22.4943 8.89509 21.1243 7.13931 19.3748 7.17198H8.57914C7.54926 7.17198 6.65283 6.94993 5.90513 6.64234ZM9.42289 22.8281C9.42289 22.1809 8.89822 21.6563 8.25102 21.6563C6.69609 21.7182 6.69745 23.9387 8.25102 24C8.89822 24 9.42289 23.4753 9.42289 22.8281ZM18.751 22.8281C18.751 22.1809 18.2263 21.6563 17.5791 21.6563C16.0242 21.7182 16.0255 23.9387 17.5791 24C18.2263 24 18.751 23.4753 18.751 22.8281ZM20.3123 9.98446C20.3123 9.46668 19.8925 9.04697 19.3748 9.04697H8.95414C7.71027 9.09647 7.71121 10.8729 8.95414 10.922H19.3748C19.8925 10.922 20.3123 10.5022 20.3123 9.98446Z"
              fill="#3D3D3D"
            />
            <circle
              cx="23.001"
              cy="8"
              r="7"
              fill="#46A358"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M25.121 8.83C25.121 7.58 24.101 6.62 22.951 6.62C22.841 6.62 22.751 6.63 22.661 6.65L24.251 4.4H23.001L21.351 6.73C21.121 7.06 20.951 7.31 20.841 7.49C20.731 7.67 20.641 7.87 20.561 8.1C20.491 8.32 20.451 8.56 20.451 8.82C20.421 10.12 21.531 11.13 22.781 11.11C24.041 11.11 25.121 10.12 25.121 8.83ZM24.071 8.83C24.071 9.2 23.941 9.52 23.691 9.77C23.441 10.02 23.141 10.14 22.781 10.14C22.411 10.14 22.111 10.02 21.861 9.77C21.611 9.52 21.491 9.2 21.491 8.83C21.491 8.46 21.611 8.15 21.861 7.9C22.111 7.65 22.411 7.52 22.781 7.52C23.141 7.52 23.441 7.65 23.691 7.9C23.941 8.15 24.071 8.46 24.071 8.83Z"
              fill="white"
            />
          </svg>
        </Link>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 font-Jost hover:text-[#46a358]">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
