export interface Character {
    ryuujin: string;
    createAt: string;
    nameCharacter: string;
    namePlayer: string;
    classCharacter: string;  // Verifique se este é o nome correto
    level: number;
    xp: number;
    gender: string;
    age: number;
    characterType: string; // Tipo do personagem (Atacante, Mágico, Técnico)
    characterSeason: string; // Se do tipo Mágico escolher uma estação do ano (Verão, Outono, Inverno, Primavera)
    attributes: {
        forca: number;
        destreza: number;
        inteligencia: number;
        espirito: number;
    };
    pv: number; // Pontos de Vida
    pm: number; // Pontos de Magia
    classSkills: string[]; // Talentos de Classe
    statsUsed: string; // Atributos usados nos talentos de classe
    effect: string; // Efeito do talento de classe
    spells?: string[]; // Magias (opcional, dependendo do tipo)
    condition: number; // Condição (soma FOR + ESP, se maior que 10 adicione um dado ao atributo)
    initiative: number; // DES + INT
    equipment: string;
    travel: {
        terreno: string;
        clima: string;
    };
    hometown: string; // Cidade Natal
    travelReason: string; // Motivo para Viajar
    notes: string;
    appearance: string; // Aparência
}