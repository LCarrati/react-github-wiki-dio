import { useState } from 'react'
import gitLogo from '../assets/github.png'
import Button from '../components/Button'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import { Container } from './styles'


function App() {
  
  const [currentRepo, setCurrentRepo] = useState('')

  const [repos, setRepos] = useState([]);

  function test(data) {
    if (data.id) { //se data.id existe
  
      const isExist = repos.find(repo => repo.id === data.id) // true ou false, pra não adicionar repo repetido, que já está na lista
  
      if (!isExist){
        setRepos(state => [...state, data])
        setCurrentRepo('') //limpar o input
      }
    } 
  }
  
  const handleSearchRepo = () => {
    const url = `https://api.github.com/repos/${currentRepo}`

    fetch(url,{
      method: 'GET',
      headers: {
        Authorization: 'token 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'
      }})
      .then((response) => {
        if (response.status < 400){
          return response.json()
        } 
      })
      .then(test)
      .catch(error => console.log('Não foi possivel completar a sua ligação.'))
  }

  const handleRemoveRepo = (id) => {
    console.log('remover', id)
    const filtered = repos.filter((repo) => repo.id !== id)
    setRepos(filtered)
  }

  return (
    <div className="App">
      <Container>
        <img src={gitLogo} width='72px' height='72px' />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSearchRepo}/>
        {repos.map(repo => <ItemRepo repo={repo} key={repo.id} handleRemoveRepo={handleRemoveRepo}/>)}
      </Container>
    </div>
  )
}

export default App
