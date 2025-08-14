"use client";

import React from "react";
import { Hyperspeed as HyperspeedEffect } from "@appletosolutions/reactbits";

interface HyperspeedProps {
  effectOptions?: any; // You can type this more strictly if you want later
}

export default function Hyperspeed({ effectOptions }: HyperspeedProps) {
  return <HyperspeedEffect effectOptions={effectOptions} />;
}