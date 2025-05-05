"use client"
import Link from 'next/link';
import React from 'react';

const NavbarView: React.FC = () => {
    return (
      <div className= "flex flex-row items-center justify-around">
        <h1>
            Navbar Test.
        </h1>
        <Link href="/login" className="btn btn-primary bg-amber-400">
          Login
        </Link>
        <Link href="/register" className="btn btn-primary bg-amber-400">
          Register
        </Link>
        <Link href="/products" className="btn btn-primary bg-amber-400">
          Inventory
        </Link>

      </div>
    );
};

export default NavbarView;
