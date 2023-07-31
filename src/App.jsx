/* eslint-disable no-unused-vars */

import './App.css'
import { Title } from './components/Title'
import { Counter } from './components/Counter'

import useCountdown from './hooks/useCountdonw'

import NewYear from './assets/newyear.jpg'

function App() {

  const [day, hour, minute, second] = useCountdown('Jan 1, 2024 00:00:00')

  return (
    <div className='App' style={{backgroundImage:`url(${NewYear})`}}>
      <div className="container">
        <Title title='Contagem regressiva para 2024' />
        <div className="countdown-container">
          <Counter title='Dias' number={day} />
          <Counter title='Horas' number={hour} />
          <Counter title='Minutos' number={minute} />
          <Counter title='Segundos' number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
