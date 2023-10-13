import StyledComponentsRegistry from "@/lib/registry"


export const metadata = {
  title: "EVA-S1 | Bem vindo A Nossa IA"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}