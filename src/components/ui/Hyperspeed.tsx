"use client";

import React from "react";
import { Hyperspeed as HyperspeedEffect } from "@appletosolutions/reactbits";

interface HyperspeedProps {
  effectOptions?: any;
}

export default function Hyperspeed({ effectOptions }: HyperspeedProps) {
  return <HyperspeedEffect effectOptions={effectOptions} />;
}