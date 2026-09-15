// Imagens de terceiros (Unsplash, licença Unsplash). Hotlink via images.unsplash.com,
// como a licença permite. Todas creditadas em /colophon. Substituir por fotos
// próprias conforme o material da viagem chegar.

export type Img = {
  id: string; // photo-xxxx
  alt: string;
  author: string; // handle Unsplash
  authorName?: string;
};

export const unsplash = (img: Img, w = 1800, q = 72) =>
  `https://images.unsplash.com/${img.id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  prologo: { id: 'photo-1542382248-cc0aa645262c', alt: 'Cidade vista de cima, à noite, pela janela do avião', author: 'dulhiier' },
  londres: { id: 'photo-1564932447568-42cce241aca9', alt: 'Concreto cinza do South Bank, Londres', author: 'thegregmak' },
  londresRua: { id: 'photo-1633382599869-313515a421a4', alt: 'Guarda-chuva numa rua molhada de Londres', author: 'devsnice' },
  londresNoite: { id: 'photo-1664695484183-c15c18786a21', alt: 'Rua molhada à noite, Londres', author: 'thenowtime' },
  birmingham: { id: 'photo-1668998909685-f23656e70eb9', alt: 'Canais de Birmingham com prédios ao longo da água', author: 'ribakos' },
  manchester: { id: 'photo-1647629317640-fb319a698aa6', alt: 'Tijolo vermelho numa esquina do Northern Quarter', author: 'supergios' },
  oldTrafford: { id: 'photo-1642763907630-17bad0853f15', alt: 'Old Trafford vazio, assentos vermelhos e gramado', author: 'harrywwalsh' },
  oldTraffordFachada: { id: 'photo-1623607915241-a3151d59a9c8', alt: 'Fachada de Old Trafford', author: 'callacrap' },
  liverpool: { id: 'photo-1505833779582-e28ba8f922f8', alt: 'Albert Dock, Liverpool', author: 'marcuslcramer' },
  bilbao: { id: 'photo-1559211568-8ce901de931b', alt: 'Museu Guggenheim Bilbao sob céu branco', author: 'avusnex' },
  sanSebastian: { id: 'photo-1553455010-bdb488ac12e5', alt: 'Baía de La Concha, San Sebastián', author: 'raulcachophoto' },
  sanSebastianRua: { id: 'photo-1675529734661-ef763f1a51be', alt: 'Pessoas caminhando à beira-mar em San Sebastián', author: 'mikhail_volkov' },
  funchal: { id: 'photo-1674333362725-84e9996aa6fb', alt: 'Funchal visto do alto, cidade e mar', author: 'sofiavilaflor' },
  funchalMar: { id: 'photo-1725380055922-2454eb809737', alt: 'Banhistas no mar em Funchal', author: 'mickkirch' },
  areeiro: { id: 'photo-1686026368380-abb0b5d24b9c', alt: 'Caminhantes acima das nuvens no Pico do Areeiro', author: 'mylifeart' },
  areeiroEstrada: { id: 'photo-1585308013711-6b134e2c6a52', alt: 'Estrada de montanha ao pôr do sol, Madeira', author: 'timroosjen' },
  fanal: { id: 'photo-1762705003217-7bdc7caaacf7', alt: 'Loureiros retorcidos na neblina do Fanal', author: 'johnny_slav' },
  portoMoniz: { id: 'photo-1636964518395-ef7b9eb1cbb5', alt: 'Vila à beira-mar na costa norte da Madeira', author: 'partyparrotgreg' },
  portoMonizOndas: { id: 'photo-1487613970413-2ef9ab51ecbd', alt: 'Ondas quebrando na costa vulcânica', author: 'ab220' },
  saoLourenco: { id: 'photo-1583570986513-be4e73a452b3', alt: 'Ponta de São Lourenço, terra vulcânica e mar', author: 'kefiijrw' },
  kitCamera: { id: 'photo-1697311622332-184b7bb19a46', alt: 'Câmera Sony sobre tecido', author: 'mattmutluu' },
  kitLente: { id: 'photo-1617468264204-92588bd6485a', alt: 'Lente de câmera', author: 'photofeaver' },
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof images;
