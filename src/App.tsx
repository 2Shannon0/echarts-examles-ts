import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HorizontalBars from './components/pages/HorizontalBars';
import VerticalBars from './components/pages/VerticalBars';
import MainLayout from './layouts/MainLayout';
import LineCharts from './components/pages/LineCharts';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index={true} element={<VerticalBars />} />
            <Route path="HorizontalBars" element={<HorizontalBars />} />
            <Route path="LineCharts" element={<LineCharts />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
