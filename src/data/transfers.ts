/** Deslocamentos ponto a ponto: voos com horário de saída e chegada, e trechos terrestres
 *  entre aeroporto/estação e a base de cada capítulo. Tempos terrestres são estimativas
 *  (Google Maps, sem trânsito) e ficam marcados com "~". Horários de voo vêm dos bilhetes. */

export type Leg = {
  chapter: string;            // capítulo em que o trecho acontece (o de chegada)
  date: string;               // dd/mm
  from: string;
  to: string;
  mode: 'voo' | 'trem' | 'metrô' | 'carro' | 'a pé' | 'ônibus';
  dep?: string;               // horário de saída (local)
  arr?: string;               // horário de chegada (local)
  est?: string;               // duração estimada, já com "~"
  how: string;                // descrição curta
  status: 'emitido' | 'a comprar' | 'a reservar' | 'estimativa' | 'a confirmar';
  directions?: { from: string; to: string; mode?: 'transit' | 'driving' | 'walking' };
  note?: string;
};

const dir = (from: string, to: string, mode: 'transit' | 'driving' | 'walking' = 'transit') => ({ from, to, mode });

export const legs: Leg[] = [
  // ---- partida → Londres
  { chapter: 'londres', date: '16/10', from: 'GRU · Guarulhos', to: 'LHR · Heathrow', mode: 'voo', dep: '23:50', arr: '15:05 (17/10)', how: 'LATAM LA 8084 · direto · 11h15 de voo · +4h de fuso', status: 'emitido' },
  { chapter: 'londres', date: '17/10', from: 'LHR · Heathrow', to: 'Page Street, Westminster', mode: 'metrô', est: '~55 min', how: 'Piccadilly line até Green Park, Victoria line até Pimlico, 8 min a pé. Elizabeth line + Victoria dá tempo parecido', status: 'estimativa', directions: dir('Heathrow Airport', 'Page Street, London SW1P 4EX'), note: 'Chegada no apartamento por volta das 16:30, contando imigração com ETA e bagagem' },
  // ---- bate e volta Birmingham, domingo 18/10
  { chapter: 'londres', date: '18/10', from: 'London Euston', to: 'Birmingham New Street', mode: 'trem', dep: '08:06', arr: '10:02', how: 'Avanti West Coast, direto · Advance, vale só nesse trem', status: 'emitido', note: 'Domingo com obra provável na linha: conferir no National Rail na véspera' },
  { chapter: 'londres', date: '18/10', from: 'Birmingham New Street', to: 'London Euston', mode: 'trem', dep: '21:06', arr: '23:38', how: 'London Northwestern, direto · Advance, vale só nesse trem', status: 'emitido', note: 'Chegada tarde de domingo: Uber de Euston a Page Street (~15-20 min) se o metrô já tiver fechado' },
  // ---- Londres → Birmingham
  { chapter: 'birmingham', date: '22/10', from: 'Page Street', to: 'London Euston', mode: 'metrô', est: '~25 min', how: 'Victoria line de Pimlico a Euston, direto', status: 'estimativa', directions: dir('Page Street, London SW1P 4EX', 'London Euston') },
  { chapter: 'birmingham', date: '22/10', from: 'London Euston', to: 'Birmingham New Street', mode: 'trem', est: '~1h25', how: 'Avanti West Coast, direto, saídas a cada 20 min', status: 'a comprar', directions: dir('London Euston', 'Birmingham New Street'), note: 'Comprar antecipado no site da Avanti ou Trainline: o preço triplica no dia' },
  { chapter: 'birmingham', date: '22/10', from: 'Birmingham New Street', to: 'Casa do Gustavo, centro', mode: 'a pé', est: '~5 min', how: 'O apartamento fica na própria New Street, a poucas quadras da estação. Mala na mão e pronto', status: 'estimativa', directions: dir('Birmingham New Street Station', 'New Street, Birmingham', 'walking'), note: 'Endereço completo só na área /bordo' },
  // ---- Birmingham → Manchester
  { chapter: 'manchester', date: '23/10', from: 'Birmingham New Street', to: 'Manchester Piccadilly', mode: 'trem', est: '~1h30', how: 'Avanti West Coast ou CrossCountry, direto', status: 'a comprar', directions: dir('Birmingham New Street', 'Manchester Piccadilly') },
  { chapter: 'manchester', date: '23/10', from: 'Manchester Piccadilly', to: 'City Road, Hulme', mode: 'a pé', est: '~25 min a pé · ~12 min de Uber', how: '2 km cruzando o centro. Com mala, Uber ou ônibus 86', status: 'estimativa', directions: dir('Manchester Piccadilly', '343 City Road, Manchester M15', 'walking') },
  { chapter: 'manchester', date: '25/10', from: 'City Road, Hulme', to: 'Old Trafford', mode: 'metrô', est: '~20 min', how: 'Metrolink de Cornbrook ou Deansgate-Castlefield até Old Trafford. A pé são ~35 min pela Chester Road', status: 'estimativa', directions: dir('343 City Road, Manchester M15', 'Old Trafford Stadium'), note: 'Chegar 90 min antes do apito por causa do hospitality' },
  { chapter: 'manchester', date: '26/10', from: 'Deansgate', to: 'Liverpool Lime Street', mode: 'trem', dep: '10:00', arr: '10:53', how: 'Northern, direto · Advance, vale só nesse trem', status: 'emitido', directions: dir('343 City Road, Manchester M15', 'Deansgate station, Manchester', 'walking'), note: 'Deansgate fica a 10-15 min a pé de Hulme' },
  { chapter: 'manchester', date: '26/10', from: 'Liverpool Lime Street', to: 'Deansgate', mode: 'trem', dep: '21:03', arr: '21:58', how: 'Northern, direto · Advance, vale só nesse trem', status: 'emitido' },
  { chapter: 'manchester', date: '28/10', from: 'City Road, Hulme', to: 'MAN · Manchester Airport', mode: 'trem', est: '~40 min', how: 'Uber até Piccadilly (12 min) e trem até o aeroporto (20 min). Uber direto: ~30 min, £30 a £40', status: 'estimativa', directions: dir('343 City Road, Manchester M15', 'Manchester Airport'), note: 'Voo às 10:55: sair de casa até as 08:00' },
  // ---- Manchester → Bilbao → San Sebastián
  { chapter: 'san-sebastian', date: '28/10', from: 'MAN · Manchester', to: 'AMS · Amsterdã', mode: 'voo', dep: '10:55', arr: '13:15', how: 'KLM KL1032 · 1h20 de voo · +1h de fuso', status: 'emitido' },
  { chapter: 'san-sebastian', date: '28/10', from: 'AMS · Amsterdã', to: 'BIO · Bilbao', mode: 'voo', dep: '14:25', arr: '16:30', how: 'KLM KL1525 · 2h05 de voo · conexão de 1h10 em Schiphol', status: 'emitido' },
  { chapter: 'san-sebastian', date: '28/10', from: 'BIO · Bilbao', to: 'San Sebastián', mode: 'carro', est: '~1h05', how: 'AP-8, ~100 km, pedágio. Retirada do carro no aeroporto', status: 'a reservar', directions: dir('Bilbao Airport', 'San Sebastián', 'driving'), note: 'Chegada em San Sebastián por volta das 18:15, já no escuro no fim de outubro' },
  // ---- San Sebastián → Bilbao → Funchal
  { chapter: 'funchal', date: '31/10', from: 'San Sebastián', to: 'BIO · Bilbao', mode: 'carro', est: '~1h05', how: 'AP-8 de volta, devolução do carro no aeroporto', status: 'a reservar', directions: dir('San Sebastián', 'Bilbao Airport', 'driving'), note: 'Check-in fecha às 11:40. Sair de San Sebastián até as 09:00' },
  { chapter: 'funchal', date: '31/10', from: 'BIO · Bilbao', to: 'LIS · Lisboa', mode: 'voo', dep: '12:25', arr: '13:05', how: 'TAP TP1063 · 1h40 de voo · −1h de fuso', status: 'emitido' },
  { chapter: 'funchal', date: '31/10', from: 'LIS · Lisboa', to: 'FNC · Madeira', mode: 'voo', dep: '15:20', arr: '17:10', how: 'TAP TP1691 · 1h50 de voo · conexão de 2h15', status: 'emitido' },
  { chapter: 'funchal', date: '31/10', from: 'FNC · Madeira', to: 'Rua Velha da Ajuda, São Martinho', mode: 'carro', est: '~25 min', how: 'VR1 até Funchal, 22 km. Retirada do carro no aeroporto', status: 'a reservar', directions: dir('Madeira Airport', 'Rua Velha da Ajuda 28, Funchal', 'driving'), note: 'Check-in do Airbnb a partir das 15:00, chegada prevista ~18:00' },
  // ---- Funchal → Ponta Delgada
  { chapter: 'ponta-delgada', date: '03/11', from: 'São Martinho, Funchal', to: 'Ponta Delgada, costa norte', mode: 'carro', est: '~37 min', how: 'VR1 e túneis da ER104, 39 km', status: 'estimativa', directions: dir('Rua Velha da Ajuda 28, Funchal', 'Ponta Delgada, Madeira', 'driving'), note: 'Check-out 11:00, check-in 15:00: a manhã serve para o Areeiro ou para a Zona Velha' },
  // ---- volta
  { chapter: 'ponta-delgada', date: '05/11', from: 'Ponta Delgada', to: 'FNC · Madeira', mode: 'carro', est: '~43 min', how: '39 km pela costa e VR1. Devolução do carro no aeroporto', status: 'estimativa', directions: dir('Ponta Delgada, Madeira', 'Madeira Airport', 'driving'), note: 'Voo às 18:10: devolver o carro até as 16:00' },
  { chapter: 'ponta-delgada', date: '05/11', from: 'FNC · Madeira', to: 'LIS · Lisboa', mode: 'voo', dep: '18:10', arr: '19:55', how: 'TAP TP1692 · 1h45 de voo', status: 'emitido', note: 'Conexão de 3h30 em Lisboa' },
  { chapter: 'ponta-delgada', date: '05/11', from: 'LIS · Lisboa', to: 'GRU · Guarulhos', mode: 'voo', dep: '23:25', arr: '06:50 (06/11)', how: 'TAP TP87 · 10h25 de voo · −3h de fuso', status: 'emitido', note: 'Em GRU: canal vermelho com o recibo da e-DBV' },
];

export const legsOf = (chapter: string) => legs.filter((l) => l.chapter === chapter);

export const directionsUrl = (d: NonNullable<Leg['directions']>) =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(d.from)}&destination=${encodeURIComponent(d.to)}&travelmode=${d.mode ?? 'transit'}`;
