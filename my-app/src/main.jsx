import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'antd/dist/reset.css'; // Импорт стилей
import i18n from './components/pages/i18N/I18Next.jsx';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense>
    <App />
    </Suspense>
  </StrictMode>,
)
