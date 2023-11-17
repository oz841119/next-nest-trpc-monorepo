"use client"
import liff from '@line/liff';
import { useEffect } from 'react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    liff.init({
      liffId: '2001720448-MK40m1pl', // Use own liffId
    });
  }, [])
  return (
    <div>{children}</div>
  )
}
