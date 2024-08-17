import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterCard from './components/CharacterCard';
import { Character } from './types/Character';

const App: React.FC = () => {
    const [character, setCharacter] = useState<Character | null>(null);

    const handleSaveCharacter = (char: Character) => {
        setCharacter(char);
        // Aqui você faria uma requisição para salvar o personagem no backend
    };

    return (
        <div>
            <h1>Geração de Personagens para o Ryuutama</h1>
            <CharacterForm onSave={handleSaveCharacter} />
            {character && <CharacterCard character={character} />}
        </div>
    );
};

export default App;