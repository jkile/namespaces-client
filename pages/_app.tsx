import 'tailwindcss/tailwind.css';
import TopNav from '../components/TopNav'

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <TopNav />
      <div className="py-10">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
