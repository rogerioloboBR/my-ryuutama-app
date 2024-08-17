import React from 'react';
import { Character } from '../types/Character';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
    return (
        <div>
            <h2>{character.nameCharacter}</h2>
            <p>Class: {character.classCharacter}</p> {/* Atualizado para classCharacter */}
            <p>Level: {character.level}</p>
            {/* Adicione mais detalhes conforme necessário */}
        </div>
    );
};

export default CharacterCard;