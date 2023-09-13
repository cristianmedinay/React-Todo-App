import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  store  from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <App  key={store.index}/>
    </Provider>
    
)
