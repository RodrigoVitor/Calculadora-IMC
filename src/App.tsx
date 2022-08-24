import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () => {
  const [heightFIeld, setHeightField] = useState(0)
  const [weightField, setWeightField] = useState(0)

  function handleCalculateButton() {
    if (heightFIeld && weightField) {

    } else {
      alert('Preenche todos os dados')
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt=""  width={150}/>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa. </p>
          <input 
            type="numbber"
            placeholder='Digite sua altura. Ex 1.75 (em metros)'
            value={heightFIeld > 0 ? heightFIeld : ''} 
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input 
            type="numbber"
            placeholder='Digite sua altura. Ex 75 (em kg)'
            value={weightField > 0 ? weightField : ''} 
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>

    </div>
  )
}

export default App