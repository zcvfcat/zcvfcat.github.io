import MenuTree from 'modules/MenuTree'

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <header></header>
      <main>
        <nav>
          <MenuTree />
        </nav>
        <section></section>
        <aside></aside>
      </main>
    </div>
  )
}
