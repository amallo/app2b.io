import FloatingContactButton from './FloatingContactButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingContactButton />
    </>
  )
} 