import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Layout from './components/layout/layout';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
