import HomeAside from '../components/HomeAside'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import PostSortNav from '../components/PostSortNav'
import ThreadList from '../components/ThreadList'

export default function Index() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}

      <TopNav />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <Sidebar />
          <main className="lg:col-span-9 xl:col-span-6">
            <PostSortNav />
            <ThreadList />
          </main>
          <HomeAside />                                       
        </div>
      </div>
    </div>
  )
}

