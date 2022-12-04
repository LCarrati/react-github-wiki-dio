import React from 'react'

import { ItemContainer } from './styles'

const ItemRepo = ({repo, handleRemoveRepo}) => {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank'>Ver respositório</a><br />
        <a href='#' className='remover' onClick={() => handleRemoveRepo(repo.id)}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo