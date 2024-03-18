import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';

function App() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
