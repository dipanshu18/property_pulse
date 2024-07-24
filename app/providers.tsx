"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import * as React from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function NextAuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
