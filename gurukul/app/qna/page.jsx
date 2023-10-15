'use client';

import React from 'react';
import { MendableSearchBar } from '@mendable/search';
import { MendableInPlace } from "@mendable/search"

const MyMendableSearchBar = () => {

  const style = { darkMode: true, accentColor: "#123456" }
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600vh', 
  };
  return (
    <div style={styles}>
    <MendableInPlace anon_key={process.env.NEXT_PUBLIC_MENDABLE_ANON_KEY} style={style}  />
    </div>

  );
};

export default MyMendableSearchBar;
