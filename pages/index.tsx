import HomeAside from '../components/HomeAside'
import PostSortNav from '../components/PostSortNav'
import ThreadList from '../components/ThreadList'
import Sidebar from '../components/Sidebar'

export default function Index() {
  return (

    <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
      <Sidebar />
      <main className="lg:col-span-9 xl:col-span-6">
        <PostSortNav />
        <ThreadList />
      </main>
      <HomeAside />
    </div>

  )
}

