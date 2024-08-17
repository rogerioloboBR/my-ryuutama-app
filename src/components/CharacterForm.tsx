import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Character } from '../types/Character';
import './CharacterForm.css'; // Certifique-se de que o arquivo CSS está no mesmo diretório

const CharacterForm: React.FC<{ onSave: (character: Character) => void }> = ({ onSave }) => {
    const [ryuujin, setRyuujin] = useState<string>('');
    const [createAt, setCreateAt] = useState<string>(new Date().toISOString().split('T')[0]);
    const [nameCharacter, setNameCharacter] = useState<string>('');
    const [namePlayer, setNamePlayer] = useState<string>('');
    const [classCharacter, setClassCharacter] = useState<string>('Artesão');
    const [level, setLevel] = useState<number>(1);
    const [xp, setXp] = useState<number>(0);
    const [gender, setGender] = useState<string>('Masculino');
    const [age, setAge] = useState<number>(18);
    const [characterType, setCharacterType] = useState<string>('Atacante');
    const [characterSeason, setCharacterSeason] = useState<string>('Verão');
    const [attributes, setAttributes] = useState({
        forca: 6,
        destreza: 6,
        inteligencia: 6,
        espirito: 6,
    });
    const [pv, setPv] = useState<number>(0);
    const [pm, setPm] = useState<number>(0);
    const [classSkills, setClassSkills] = useState<string[]>([]);
    const [statsUsed, setStatsUsed] = useState<string>('');
    const [effect, setEffect] = useState<string>('');
    const [spells, setSpells] = useState<string[]>([]);
    const [condition, setCondition] = useState<number>(0);
    const [initiative, setInitiative] = useState<number>(0);
    const [equipment, setEquipment] = useState<string>('');
    const [travel, setTravel] = useState({
        terreno: '',
        clima: '',
    });
    const [hometown, setHometown] = useState<string>('');
    const [travelReason, setTravelReason] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [appearance, setAppearance] = useState<string>('');

    // Atualiza PV e PM quando os atributos mudam
    const updatePvPm = () => {
        setPv(attributes.forca * 2);
        setPm(attributes.espirito * 2);
    };

    // Calcula a condição e a iniciativa
    const updateConditionAndInitiative = () => {
        setCondition(attributes.forca + attributes.espirito);
        setInitiative(attributes.destreza + attributes.inteligencia);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        updatePvPm();
        updateConditionAndInitiative();
        const character: Character = {
            ryuujin,
            createAt,
            nameCharacter,
            namePlayer,
            classCharacter, // Corrigido para classCharacter
            level,
            xp,
            gender,
            age,
            characterType,
            characterSeason,
            attributes,
            pv,
            pm,
            classSkills,
            statsUsed,
            effect,
            spells,
            condition,
            initiative,
            equipment,
            travel,
            hometown,
            travelReason,
            notes,
            appearance,
        };
        onSave(character);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ficha de Personagem</h1>
            <label>
                Ryuujin:
                <input type="text" value={ryuujin} onChange={(e: ChangeEvent<HTMLInputElement>) => setRyuujin(e.target.value)} />
            </label>
            <label>
                Data de Criação:
                <input type="date" value={createAt} onChange={(e: ChangeEvent<HTMLInputElement>) => setCreateAt(e.target.value)} />
            </label>
            <label>
                Nome do Personagem:
                <input type="text" value={nameCharacter} onChange={(e: ChangeEvent<HTMLInputElement>) => setNameCharacter(e.target.value)} />
            </label>
            <label>
                Nome do Jogador:
                <input type="text" value={namePlayer} onChange={(e: ChangeEvent<HTMLInputElement>) => setNamePlayer(e.target.value)} />
            </label>
            <label>
                Classe do Personagem:
                <select value={classCharacter} onChange={(e: ChangeEvent<HTMLSelectElement>) => setClassCharacter(e.target.value)}>
                    <option value="Artesão">Artesão</option>
                    <option value="Caçador">Caçador</option>
                    <option value="Curandeiro">Curandeiro</option>
                    <option value="Fazendeiro">Fazendeiro</option>
                    <option value="Menestrel">Menestrel</option>
                    <option value="Mercador">Mercador</option>
                    <option value="Nobre">Nobre</option>
                    {/* Adicione outras classes conforme necessário */}
                </select>
            </label>
            <label>
                Nível:
                <input type="number" value={level} onChange={(e: ChangeEvent<HTMLInputElement>) => setLevel(Number(e.target.value))} min="1" />
            </label>
            <label>
                XP:
                <input type="number" value={xp} onChange={(e: ChangeEvent<HTMLInputElement>) => setXp(Number(e.target.value))} />
            </label>
            <label>
                Gênero:
                <select value={gender} onChange={(e: ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
            </label>
            <label>
                Idade:
                <input type="number" value={age} onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value))} />
            </label>
            <label>
                Tipo de Personagem:
                <select value={characterType} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCharacterType(e.target.value)}>
                    <option value="Atacante">Atacante</option>
                    <option value="Mágico">Mágico</option>
                    <option value="Técnico">Técnico</option>
                </select>
            </label>
            {characterType === "Mágico" && (
                <label>
                    Estação do Ano:
                    <select value={characterSeason} onChange={(e: ChangeEvent<HTMLSelectElement>) => setCharacterSeason(e.target.value)}>
                        <option value="Verão">Verão</option>
                        <option value="Outono">Outono</option>
                        <option value="Inverno">Inverno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                </label>
            )}
            <fieldset>
                <legend>Atributos</legend>
                <label>
                    FOR:
                    <input type="number" value={attributes.forca} onChange={(e: ChangeEvent<HTMLInputElement>) => setAttributes({ ...attributes, forca: Number(e.target.value) })} />
                </label>
                <label>
                    DES:
                    <input type="number" value={attributes.destreza} onChange={(e: ChangeEvent<HTMLInputElement>) => setAttributes({ ...attributes, destreza: Number(e.target.value) })} />
                </label>
                <label>
                    INT:
                    <input type="number" value={attributes.inteligencia} onChange={(e: ChangeEvent<HTMLInputElement>) => setAttributes({ ...attributes, inteligencia: Number(e.target.value) })} />
                </label>
                <label>
                    ESP:
                    <input type="number" value={attributes.espirito} onChange={(e: ChangeEvent<HTMLInputElement>) => setAttributes({ ...attributes, espirito: Number(e.target.value) })} />
                </label>
            </fieldset>

            <div>
                <p>Pontos de Vida (PV): {pv}</p>
                <p>Pontos de Magia (PM): {pm}</p>
                <p>Condição: {condition}</p>
                <p>Iniciativa: {initiative}</p>
            </div>

            <label>
                Talentos de Classe:
                <input type="text" value={classSkills.join(', ')} onChange={(e: ChangeEvent<HTMLInputElement>) => setClassSkills(e.target.value.split(',').map(skill => skill.trim()))} />
            </label>
            <label>
                Atributos Usados:
                <input type="text" value={statsUsed} onChange={(e: ChangeEvent<HTMLInputElement>) => setStatsUsed(e.target.value)} />
            </label>
            <label>
                Efeito:
                <input type="text" value={effect} onChange={(e: ChangeEvent<HTMLInputElement>) => setEffect(e.target.value)} />
            </label>
            {characterType === "Mágico" && (
                <label>
                    Magias:
                    <input type="text" value={spells.join(', ')} onChange={(e: ChangeEvent<HTMLInputElement>) => setSpells(e.target.value.split(',').map(spell => spell.trim()))} />
                </label>
            )}
            <label>
                Equipamento:
                <textarea value={equipment} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setEquipment(e.target.value)} />
            </label>

            <fieldset>
                <legend>Regras de Viagem</legend>
                <label>
                    Terreno:
                    <input type="text" value={travel.terreno} onChange={(e: ChangeEvent<HTMLInputElement>) => setTravel({ ...travel, terreno: e.target.value })} />
                </label>
                <label>
                    Clima:
                    <input type="text" value={travel.clima} onChange={(e: ChangeEvent<HTMLInputElement>) => setTravel({ ...travel, clima: e.target.value })} />
                </label>
            </fieldset>

            <label>
                Cidade Natal:
                <input type="text" value={hometown} onChange={(e: ChangeEvent<HTMLInputElement>) => setHometown(e.target.value)} />
            </label>
            <label>
                Motivo para Viajar:
                <input type="text" value={travelReason} onChange={(e: ChangeEvent<HTMLInputElement>) => setTravelReason(e.target.value)} />
            </label>
            <label>
                Notas:
                <textarea value={notes} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)} />
            </label>
            <label>
                Aparência:
                <input type="text" value={appearance} onChange={(e: ChangeEvent<HTMLInputElement>) => setAppearance(e.target.value)} />
            </label>

            <button type="submit">Salvar Personagem</button>
        </form>
    );
};

export default CharacterForm;
