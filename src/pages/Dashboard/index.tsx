import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories , Error} from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashbord: React.FC = () => {
  const [newRepoSearch, setNewRepoSearch] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem("@GithubExplorer:respositories");

    if (storageRepositories){
      return JSON.parse(storageRepositories);
    } else {
      return []
    }


  });
  const [inputError, setInputError] = useState('');

  useEffect( ()=> {
    localStorage.setItem('@GithubExplorer:respositories', JSON.stringify(repositories));
  }, [repositories] )


  async function handleAddRepository( event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepoSearch){
      setInputError('Digite autor/repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepoSearch}`);
      const repository = response.data;
      setRepositories([... repositories, repository]);
      setNewRepoSearch('');
      setInputError('');
    } catch (error) {
      setInputError('Erro na busca do repositório!');
    }
  }

  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError ={!! inputError } onSubmit={handleAddRepository}>
        <input
          value={newRepoSearch}
          onChange={(e) => setNewRepoSearch(e.target.value)}
          placeholder="Digite: usuário/repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { inputError && <Error>{inputError}</Error>    }


      <Repositories>
        {
          repositories.map( repository => (
          <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
          ) )
        }
      </Repositories>
    </>
  );
};

export default Dashbord;
